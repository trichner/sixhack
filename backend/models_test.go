package main

import (
    "github.com/stretchr/testify/assert"
    "testing"
    "fmt"
)

func TestWalledEncoding(t *testing.T) {

    chain, err := GenerateHashChain(10)
    assert.Nil(t, err)

    wallet := Wallet{
        "someid",
        chain.Head,
        chain.Tail,
    }

    encoded, err := wallet.encode()
    assert.Nil(t, err)

    fmt.Println(string(encoded))
    decoded, err:= WalletDecode(encoded)
    assert.Nil(t, err)

    assert.Equal(t,wallet,decoded)

}
