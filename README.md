# sixhack
SIX Hackathon 2016

## API

Listing all wallets (DEBUG: DO NOT USE IN PRODUCTION)
```
~> curl https://n1b.ch:7443/wallet
[]

~> curl https://n1b.ch:7443/wallet
[{
	"id": "anotherRandomId",
	"seed": "YSt3kMSNHSQh9-1PI3zNcLox47KVo_UtGafKYD6bFl4=",
	"tail": "mx0P8kxDGwSKkWysgAUVqj5xLKWfSlO5w8P3MxvLciQ="
}, {
	"id": "thisIsARandomId",
	"seed": "luop57JXc0f6UaD_pGgF81trIJqE5xFLpBstLsjudA0=",
	"tail": "Z-01liu8KBaFUgp5cVSgByCxE5fOyDmjnqGgZMp4FZs="
}]
```

Creating new Wallets/Chains (DEBUG: DO NOT USE IN PRODUCTION)
```
~> curl -X POST https://n1b.ch:7443/wallet/thisIsARandomId
~> curl -X POST https://n1b.ch:7443/wallet/anotherRandomId
```

Retrieving Wallets/Chains
```
~> curl https://n1b.ch:7443/wallet/thisIsARandomId
{
	"id": "thisIsARandomId",
	"seed": "luop57JXc0f6UaD_pGgF81trIJqE5xFLpBstLsjudA0=",
	"tail": "Z-01liu8KBaFUgp5cVSgByCxE5fOyDmjnqGgZMp4FZs="
}
```

## Browser API

### Messages
page -> plugin
```
{
	id: "TIPIT_REQ_123",
	amount: 42
}
```

plugin -> page
```
{
	id: "TIPIT_RESP_123",
	coin: "asKINDFNMCXisiiwejiwfsd="
}
```