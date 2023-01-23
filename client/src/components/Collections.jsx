import { useQuery} from '@apollo/client';
import CollectionRow from './CollectionRow';
import Spinner from './Spinner';
import { GET_COLLECTIONS } from '../queries/collectionQueries'

function Collections() {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);
  if(loading) return <Spinner/>
  if(error) return <p>Something went wrong</p>
  return (
    <>
      { !loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Chain</th>
              <th>Total Supply</th>
              <th>Total Vol</th>
            </tr>
          </thead>
          <tbody>
            {
              data.collections.map(
                collection => (
                  <CollectionRow key={collection.id} collection={collection}/>
                )
              )
            }
          </tbody>
        </table>
      )}
    </>
  )
}

export default Collections