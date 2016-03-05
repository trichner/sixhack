
package main

import (
	"crypto/sha256"
	"encoding/base64"
	"crypto/rand"
)

type HashChain struct{
	Head string `json:"seed"`
	Tail string `json:"tail"`
}

func CountChain(chain HashChain) (int){
	limit := 10000
	coins := 0
	for ; coins<limit ; coins++ {
		if chain.Head == chain.Tail {
			break
		}
		chain.Head = HashString(chain.Head)
	}
	return coins
}

func GenerateHashChain(n int) (HashChain, error){
	seed, err := GenerateRandomString()
	tail := seed
	for i:=0; i<n;i++ {
		tail = HashString(tail)
	}
	return HashChain{seed,tail}, err
}

func HashString(str string) string{
	bv := []byte(str)
    hasher := sha256.New()
    hasher.Write(bv)
    return base64.URLEncoding.EncodeToString(hasher.Sum(nil))
}

func GenerateRandomBytes(n int) ([]byte, error) {
    b := make([]byte, n)
    _, err := rand.Read(b)
    // Note that err == nil only if we read len(b) bytes.
    if err != nil {
        return nil, err
    }

    return b, nil
}

func GenerateRandomString() (string, error) {
    b, err := GenerateRandomBytes(32)
    return base64.URLEncoding.EncodeToString(b), err
}

