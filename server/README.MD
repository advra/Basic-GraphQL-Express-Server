# Server Readme


After cloning copy the .envexample:
```bash
git clone git@github.com:advra/Basic-GraphQL-Express-Server.git
cd Basic-GraphQL-Express-Server
cp .env.example .env

# npm run start for production or runDev for development with GraphiQL ui
npm run runDev
# open browser and navigate to: https://localhost:5000/graphql
```

Example Query:

```
{
    collections {
        id,
        name,
        description,
        owner {
            username,
            wallet
        }
    }
}
```

Output:

```json
{
  "data": {
    "collections": [
      {
        "id": "1",
        "name": "Moonbirds",
        "description": "A collection of 10,000 PFPs which grant their holders access to the digital and IRL Moonbirds community. Community members can nest their birds to signal their commitment, in return for exclusive perks—which so far have included trait-based physical and digital drops, the Oddities, and time-based nesting rewards.Moonbird art is entirely in-chain, meaning the images are outputted directly from the smart contract, with no need for storage on IPFS or the like. There are also special gradient backgrounds available to Proof Collective pass holders, which will disappear when the bird is transfered. You can check what each bird looks like with and without this background (and see if they have any unclaimed rewards!) on our site",
        "totalVolume": 177477,
        "owner": {
          "username": "PROOF_XYZ",
          "wallet": "0x6c8984bAf566Db08675310b122BF0be9Ea269ecA"
        }
      },
      {
        "id": "2",
        "name": "Nippy: Magnet for Mischief",
        "description": "A cat of a 3,222 personalities, her can-do attitude will help kids & parents discover a whole new world. A part of a much larger ensemble of characters and storylines, Nippy, Rufus, and all their friends will become a franchise of Children’s books, toys, games, videos, and music. Sold out in Sept 2022 for .02-.03, a true innovating project in bridging web2 and web3 to bring real solvency to the holder base.Holders of our assets are listed contributors, brand ambassadors, and earn profit-sharing for their continued word-of-mouth, social, and network marketing.",
        "totalVolume": 319,
        "owner": {
          "username": null,
          "wallet": "0x67DD32cFb3DdEb19De106e1B8CA308044d391f24"
        }
      },
      {
        "id": "3",
        "name": "Space Riders NFT",
        "description": "8,888 Space Riders unifying the galactic realms of Ethereum.",
        "totalVolume": 2701,
        "owner": {
          "username": "Zubic",
          "wallet": "0x077aC19FF94d46F7155Ea660C92ab53bf8868763"
        }
      },
      {
        "id": "4",
        "name": "Bored Ape Yatch Club",
        "description": "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.",
        "totalVolume": 710633,
        "owner": {
          "username": "YugaLabs",
          "wallet": "0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1"
        }
      },
      {
        "id": "5",
        "name": "Valhalla",
        "description": "Valhalla is a crypto native brand for gamers. Valhalla represents more than a collection of digital avatars. It represents decades of gaming culture: the clutch plays, the ELO grind, the OT wins. Visit joinvalhalla.com for more details.",
        "totalVolume": 14567,
        "owner": {
          "username": "YugaLabs",
          "wallet": "0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1"
        }
      }
    ]
  }
}
```

# More Examples

### Create new User and return all data
```
mutation{
  addUser(username: "Gibby", wallet:"0x602faeE794E16604fbB17511b1ad179a728cE61b"){
    id
    username
    wallet
  }
}
```

### Create new Collection and return all data
```
mutation{
	addCollection(name: "Moonbirds", image: "https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?auto=format&w=1920", description:"A collection of 10,000 PFPs which grant their holders access to the digital and IRL Moonbirds community. Community members can nest their birds to signal their commitment, in return for exclusive perks—which so far have included trait-based physical and digital drops, the Oddities, and time-based nesting rewards.Moonbird art is entirely in-chain, meaning the images are outputted directly from the smart contract, with no need for storage on IPFS or the like. There are also special gradient backgrounds available to Proof Collective pass holders, which will disappear when the bird is transfered. You can check what each bird looks like with and without this background (and see if they have any unclaimed rewards!) on our site", chain:"ethereum", totalSupply:10000, totalVolume: 177477){    
		id
    name
    image
    description
    chain
    totalSupply
    totalVolume
	}
}
```

# Update Collections and return all data
```
mutation{
	updateCollection(id: "63cc8bbefb230ded0d6bfce2",name: "Moon Birds"){    
		id
    name
    image
    description
    chain
    totalSupply
    totalVolume
	}
}
```