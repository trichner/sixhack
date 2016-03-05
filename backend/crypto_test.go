package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
	"fmt"
)

func TestGenerateCountChain(t *testing.T) {

	n := 50
	chain, err := GenerateHashChain(n)
	fmt.Printf("Chain: %s -> %s \n",chain.Head,chain.Tail)
	assert.Nil(t, err)
	assert.Equal(t,n,CountChain(chain))

}

func TestCountChain(t *testing.T) {
	chain, err := GenerateHashChain(1)
	chain.Head = chain.Tail

	assert.Nil(t, err)
	assert.Equal(t,0,CountChain(chain))
}