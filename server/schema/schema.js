const { collections, users } = require('../sampleData');
const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList,
    GraphQLInt
} = require('graphql');

// collectionType
const CollectionType = new GraphQLObjectType({
    name: 'Collection',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        image: { type: GraphQLString},
        description: { type: GraphQLString},
        chain: { type: GraphQLString},
        total: { type: GraphQLInt},
        owner: {
            type: UserType,
            resolve(parent, args) {
                return users.find(user => user.id === parent.ownerId)
            }
        }
    })
});

// UserType
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString},
        wallet: { type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        collections:  {
            type: GraphQLList(CollectionType),
            resolve( parent, args ) {
                return collections;
            }
        },
        collection: {
            type: CollectionType,
            args: { id: {type: GraphQLID } },
            resolve( parent, args ) {
                return collections.find(collection => collection.id === args.id);
            }
        },
        users:  {
            type: GraphQLList(UserType),
            resolve( parent, args ) {
                return users;
            }
        },
        user: {
            type: UserType,
            args: { id: {type: GraphQLID } },
            resolve( parent, args ) {
                return users.find(user => user.id === args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});