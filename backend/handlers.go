package main

import (
    "encoding/json"
    "net/http"

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
        w.WriteHeader(http.StatusNotFound)
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
    js, err := json.MarshalIndent(wallets, "", "   ")
    if err!=nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.Write(js)
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
    js, err := json.Marshal(coins)
    if err!=nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    w.Write(js)
}
