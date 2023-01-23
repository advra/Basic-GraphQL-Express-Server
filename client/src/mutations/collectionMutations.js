import { gql } from '@apollo/client';

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

export { DELETE_COLLECTION }