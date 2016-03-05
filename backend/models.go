package main

import "encoding/json"

type Wallet struct {
    Id      string	`json:"id"`
    Seed	string	`json:"seed"`
    Tail    string	`json:"tail"`
}

func (w Wallet) encode() ([]byte, error) {
    enc, err := json.Marshal(w)
    if err != nil {
        return nil, err
    }
    return enc, nil
}

func WalletDecode(data []byte) (Wallet, error) {
    var w Wallet
    err := json.Unmarshal(data, &w)
    return w, err
}