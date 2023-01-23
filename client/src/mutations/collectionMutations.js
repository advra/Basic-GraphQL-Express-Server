import { gql } from '@apollo/client';

const ADD_COLLECTION = gql`
  mutation addCollection($name: String!, $image: String!, $description: String!, $chain: String!, $totalSupply: Int!, $totalVolume: Int!){
    addCollection(name: $name, image: $image, description: $description, chain: $chain, totalSupply: $totalSupply, totalVolume: $totalVolume){
      id
      name
      image
      description
      chain
      totalSupply
      totalVolume
    }
  }
`;

const DELETE_COLLECTION = gql`
  mutation deleteCollection($id: ID!){
    deleteCollection(id: $id){
      id
      name
      image
      description
      chain
      totalSupply
      totalVolume

    }
  }
`;

export { DELETE_COLLECTION, ADD_COLLECTION }