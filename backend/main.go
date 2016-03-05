package main

import (
    "log"
    "net/http"
    //"os"
)

func main() {
    OpenDB()
    defer CloseDB()

    router := NewRouter()
    port := ":8080"//":"+os.Getenv("PORT")
    log.Printf("Starting server on %s.\n",port)
    log.Fatal(http.ListenAndServe(port, router))
}