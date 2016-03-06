package main

import (
    "fmt"
    "flag"
    "github.com/trichner/sixhack/backend/hash"
)

func main() {
	var head string
	var tail string
	var limit int

	flag.StringVar(&head,"head","","head of the chain")
	flag.StringVar(&tail,"tail","","tail of the chain")
	flag.IntVar(&limit,"limit",10000,"limit of strings")
	flag.Parse()

	coins := 0
	for ; coins<limit ; coins++ {
		if head == tail {
			fmt.Printf("%d\n",coins)
			break
		}
		fmt.Printf("%s\n",head)
		head = hash.HashString(head)
	}

}