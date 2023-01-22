//Mongoose models
const Collection = require("../models/Collection");
const User = require("../models/User");

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLEnumType,
} = require("graphql");

// collectionType
const CollectionType = new GraphQLObjectType({
    name: "Collection",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        chain: { type: GraphQLString },
        totalSupply: { type: GraphQLInt },
        totalVolume: { type: GraphQLInt },
        owner: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.ownerId);
            },
        },
    }),
});

// UserType
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        wallet: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        collections: {
            type: GraphQLList(CollectionType),
            resolve(parent, args) {
                return Collection.find();
            },
        },
        collection: {
            type: CollectionType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Collection.findById(args.id);
            },
        },
        users: {
            type: GraphQLList(UserType),
            resolve(parent, args) {
                return User.find();
            },
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            },
        },
    },
});

// Mutations
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // Add a user
        addUser: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                wallet: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const user = new User({
                    username: args.username,
                    wallet: args.wallet,
                });

                return user.save();
            },
        },
        // Delete a user
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return User.findByIdAndRemove(args.id);
            },
        },
        addCollection: {
            type: CollectionType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                image: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                chain: { type: GraphQLNonNull(GraphQLString) },
                totalSupply: { type: GraphQLNonNull(GraphQLInt) },
                totalVolume: { type: GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                const collection = new Collection({
                    name: args.name,
                    image: args.image,
                    description: args.description,
                    chain: args.chain,
                    totalSupply: args.totalSupply,
                    totalVolume: args.totalVolume,
                });

                return collection.save();
            },
        },
        deleteCollection: {
            type: CollectionType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Collection.findByIdAndRemove(args.id);
            }

        }
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation,
});
