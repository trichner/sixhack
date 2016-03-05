package main

import (
    "log"
    "net/http"
    "time"
)

type statusWriter struct {
    http.ResponseWriter
    status int
    length int
}

func (w *statusWriter) WriteHeader(status int) {
    w.status = status
    w.ResponseWriter.WriteHeader(status)
}

func (w *statusWriter) Write(b []byte) (int, error) {
    if w.status == 0 {
        w.status = 200
    }
    w.length = len(b)
    return w.ResponseWriter.Write(b)
}

func Logger(inner http.Handler, name string) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        writer := statusWriter{w, 0, 0}
        inner.ServeHTTP(&writer, r)

        log.Printf(
            "%s\t%s\t%s\t%d\t%s",
            r.Method,
            r.RequestURI,
            name,
            writer.status,
            time.Since(start),
        )
    })
}