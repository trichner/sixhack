package main

import (
    "encoding/json"
    //"io"
    //"io/ioutil"
    "net/http"
    "strconv"

    "github.com/gorilla/mux"
)

func WalletCreate(w http.ResponseWriter, r *http.Request){
    vars := mux.Vars(r)
    walletId, found   := vars["walletId"]
    if !found {
        w.WriteHeader(http.StatusBadRequest)
        return
    }
    _, err := CreateWallet(walletId,1000) //TODO allow other amount
    if err != nil {
        w.WriteHeader(http.StatusInternalServerError)
    }

    w.WriteHeader(http.StatusOK)
}

func WalletGet(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    walletId, found  := vars["walletId"]
    if !found {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    wallet, err := GetWallet(walletId)
    if err!=nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    js, err := wallet.encode()
    if err!=nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.Write(js)
    w.WriteHeader(http.StatusOK)

}

func WalletGetCount(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    walletId, found  := vars["walletId"]
    if !found {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    count, err := GetWalletCount(walletId)
    if err!=nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    js, err := json.Marshal(count)
    if err!=nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.Write(js)
    w.WriteHeader(http.StatusOK)

}

func WalletsGet(w http.ResponseWriter, r *http.Request) {

    wallets:= GetWallets()

    w.Header().Set("Content-Type", "application/json")
    js, err := json.Marshal(wallets)
    if err!=nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.Write(js)
    w.WriteHeader(http.StatusOK)

}

func WalletRedeem(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)

    walletId, found   := vars["walletId"]
    if !found {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    coin, found   := vars["coin"]
    if !found {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    coins := RedeemCoins(walletId,coin)
    w.Header().Set("Content-Type", "text/plain")
    w.Write([]byte(strconv.Itoa(coins)))

    // if err := json.Unmarshal(body, &todo); err != nil {
    //     w.Header().Set("Content-Type", "application/json; charset=UTF-8")
    //     w.WriteHeader(422) // unprocessable entity
    //     if err := json.NewEncoder(w).Encode(err); err != nil {
    //         panic(err)
    //     }
    // }

    // t := RepoCreateTodo(todo)
    // w.Header().Set("Content-Type", "application/json; charset=UTF-8")
    // w.WriteHeader(http.StatusCreated)
    // if err := json.NewEncoder(w).Encode(t); err != nil {
    //     panic(err)
    // }
}
