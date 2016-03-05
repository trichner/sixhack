package main

import (
	"log"
	"github.com/boltdb/bolt"
)

const bucket = "Wallets"
var db *bolt.DB

func OpenDB() {
	// Open the my.db data file in your current directory.
	// It will be created if it doesn't exist.
	var err error
	db, err = bolt.Open("6hack.db", 0600, nil)

	if err != nil {
		log.Fatal(err)
	}

	db.Update(func(tx *bolt.Tx) error {
		_, err := tx.CreateBucketIfNotExists([]byte(bucket))
		if err != nil {
			log.Fatalf("create bucket: %s", err)
		}
		return err
	})

}

func CreateWallet(id string, coins int) (Wallet, error) {

	chain, err := GenerateHashChain(coins)
	if err != nil {
		log.Fatal(err)
		return Wallet{}, err
	}

	wallet := Wallet{
		id,
		chain.Head,
		chain.Tail,
	}

	err = db.Update(func(tx *bolt.Tx) error {
	    b := tx.Bucket([]byte(bucket))

	    w, err := wallet.encode()
	    if err != nil {
	        log.Fatal(err)
	        return err
	    }

	    return b.Put([]byte(id), []byte(w))
	})
	return wallet, err
}

func GetWallet(id string) (Wallet, error) {
	var wallet Wallet
	err := db.View(func(tx *bolt.Tx) error {
	    b := tx.Bucket([]byte(bucket))
	    v := b.Get([]byte(id))
	    log.Printf("The answer is: %s\n", v)
	    var err error
	    wallet, err = WalletDecode(v)
	    return err
	})
	return wallet, err
}

func GetWalletCount(id string) (int, error) {
	var count int = 0
	err := db.View(func(tx *bolt.Tx) error {
	    b := tx.Bucket([]byte(bucket))
	    v := b.Get([]byte(id))
	    var err error
	    wallet, err := WalletDecode(v)
	    count = CountChain(HashChain{wallet.Seed,wallet.Tail})
	    return err
	})
	return count, err
}

func GetWallets() []Wallet {
	var wallets = make([]Wallet,0)
	log.Printf("DB Walltes\n")
	db.View(func(tx *bolt.Tx) error {
		log.Printf("Query Wallets\n")
	    // Assume bucket exists and has keys
	    b := tx.Bucket([]byte(bucket))

	    c := b.Cursor()

	    for k, v := c.First(); k != nil; k, v = c.Next() {
	        wallet, err := WalletDecode(v)
	        if err==nil{
	        	log.Printf("Wallet: %s \n",wallet)
	        	wallets = append(wallets,wallet)
	        }
	    }

	    return nil
	})
	return wallets
}

func RedeemCoins(id string, coin string) (int) {
	var coins int = 0
	err := db.Update(func(tx *bolt.Tx) error {
	    b := tx.Bucket([]byte(bucket))
	    v := b.Get([]byte(id))

	    wallet, err := WalletDecode(v)
	    if err!=nil {
	    	return err
	    }
	    coins = CountChain(HashChain{coin, wallet.Tail})
	    if coins>0 {
	    	wallet.Tail = coin
	    	w, err := wallet.encode()
		    if err != nil {
		        return err
		    }
		    err = b.Put([]byte(wallet.Id), []byte(w))
	    }
	    return err
	})
	if err!= nil {
		coins = 0
	}
	return coins
}

func CloseDB() {
	db.Close()
}