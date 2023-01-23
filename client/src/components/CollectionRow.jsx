import React from 'react';
import {FaTrash} from 'react-icons/fa';
import { InMemoryCache, useMutation } from '@apollo/client';
import { DELETE_COLLECTION } from '../mutations/collectionMutations';
import { GET_COLLECTIONS } from '../queries/collectionQueries';

function CollectionRow({ collection }) {
  // const [deleteCollection] = useMutation(DELETE_COLLECTION, {
  //   variables: {id: collection.id},
  // });
  const [deleteCollection] = useMutation(DELETE_COLLECTION, {
    variables: { id: collection.id },
    // refetchQueries: [{query: GET_COLLECTIONS}],
    update(cache, {data: {deleteCollection}}) { 
      const { collections } = cache.readQuery({ query: GET_COLLECTIONS});
      cache.writeQuery({
        query: GET_COLLECTIONS,
        data: {collections: collections.filter(collection => collection.id !== deleteCollection.id)},
      })
    }
  });

  return (
    <tr className=''>
      <td>{collection.name}</td>
      <td><img src={collection.image} className="w-[50px] h-[50px]" alt="" /></td>
      <td>{collection.description}</td>
      <td>{collection.chain}</td>
      <td>{collection.totalSupply}</td>
      <td>{collection.totalVolume}</td>
      <td>
        {/* <button className="button" onClick={deleteCollection}>
          
        </button> */}
        <button className="bg-[#a11616] hover:bg-[#731717] text-white rounded-lg px-5 py-2.5 flex items-center mx-auto">
          <FaTrash/>
        </button>
      </td>
    </tr>
  );
}

export default CollectionRow;