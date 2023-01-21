const collections = [
    {
        id: '1',
        name: 'Moonbirds',
        ownerId: '6',
        image: 'https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?auto=format&w=1920',
        description:
            'A collection of 10,000 PFPs which grant their holders access to the digital and IRL Moonbirds community. Community members can nest their birds to signal their commitment, in return for exclusive perks—which so far have included trait-based physical and digital drops, the Oddities, and time-based nesting rewards.Moonbird art is entirely in-chain, meaning the images are outputted directly from the smart contract, with no need for storage on IPFS or the like. There are also special gradient backgrounds available to Proof Collective pass holders, which will disappear when the bird is transfered. You can check what each bird looks like with and without this background (and see if they have any unclaimed rewards!) on our site',
        chain: 'Ethereum',
        totalSupply: 10000,
        totalVolume: 177477
        

    },
    {
        id: '2',
        name: 'Nippy: Magnet for Mischief',
        ownerId: '7',
        image: 'https://i.seadn.io/gae/35SnBROy9wmAkwtTn49Oc7FUfNVZ2usXVAbrDC3zJtX3VpJNAIF4XSp62bZz0RI6dYE9LUbzWdBZFtDtqopsja-lLpuarjXOMyeBAA?auto=format&w=1920',
        description:
            'A cat of a 3,222 personalities, her can-do attitude will help kids & parents discover a whole new world. A part of a much larger ensemble of characters and storylines, Nippy, Rufus, and all their friends will become a franchise of Children’s books, toys, games, videos, and music. Sold out in Sept 2022 for .02-.03, a true innovating project in bridging web2 and web3 to bring real solvency to the holder base.Holders of our assets are listed contributors, brand ambassadors, and earn profit-sharing for their continued word-of-mouth, social, and network marketing.',
        chain: 'Ethereum',
        totalSupply: 3222,
        totalVolume: 319
    },
    {
        id: '3',
        name: 'Space Riders NFT',
        ownerId: '2',
        image: 'https://i.seadn.io/gcs/files/cfcbc78d684e37152701d4019f5d77a0.png?auto=format&w=1920',
        description:
            '8,888 Space Riders unifying the galactic realms of Ethereum.',
        chain: 'Ethereum',
        totalSupply: 8888,
        totalVolume: 2701
    },
    {
        id: '4',
        name: 'Bored Ape Yatch Club',
        ownerId: '5',
        image: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=1920',
        description:
            'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.',
        chain: 'Ethereum',
        totalSupply: 9998,
        totalVolume: 710633
    },
    {
        id: '5',
        name: 'Valhalla',
        ownerId: '5',
        image: 'https://i.seadn.io/gcs/files/d7936464d55988206c1b16c6929856f6.jpg?auto=format&w=1920',
        description:
            'Valhalla is a crypto native brand for gamers. Valhalla represents more than a collection of digital avatars. It represents decades of gaming culture: the clutch plays, the ELO grind, the OT wins. Visit joinvalhalla.com for more details.',
        chain: 'Ethereum',
        totalSupply: 9000,
        totalVolume: 14567
    },
];

// Users
const users = [
    {
        id: '1',
        wallet: '0x4FA3766488eC2790c0EdEE875c52e2a438010131',
        username: 'Tiger',
    },
    {
        id: '2',
        wallet: '0x077aC19FF94d46F7155Ea660C92ab53bf8868763',
        username: 'Zubic',
    },
    {
        id: '3',
        wallet: '0x5cae344a4328F08Ae3A25E0fC322A473D5cdc98Ac',
        username: 'Adrian',
    },
    {
        id: '4',
        wallet: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
        name: 'Vitalik',
    },
    {
        id: '5',
        wallet: '0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1',
        username: 'YugaLabs',
    },
    {
        id: '6',
        wallet: '0x6c8984bAf566Db08675310b122BF0be9Ea269ecA',
        username: 'PROOF_XYZ',
    },
    {
        id: '7',
        wallet: '0x67DD32cFb3DdEb19De106e1B8CA308044d391f24',
        usrname: 'Nippy-Deployer'
    }
    ,
    {
        id: '8',
        wallet: '0xFf59B4B3D52728f78020414c720164A17C08f499',
        usrname: 'StackedStudios'
    },
    {
        id: '9',
        wallet: '0x4074Bc05A89f1b97B51413b06F7e44F46Eae6880',
        usrname: 'Cashtronaut'
    },
    {
        id: '10',
        wallet: '0x42A149af798Ff314C761b099E1e45A4cEeb7c24f',
        usrname: 'Theg4mbler'
    }
];

module.exports = { collections, users };