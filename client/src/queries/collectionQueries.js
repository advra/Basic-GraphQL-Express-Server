import { gql } from '@apollo/client';

const GET_COLLECTIONS = gql`
query{
  collections {
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

export { GET_COLLECTIONS };