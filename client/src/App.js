import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import AddCollectionModal from './components/AddCollectionModal';
import Collections from './components/Collections';
import Header from "./components/Header";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        collections: {
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
}
);

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(cache),
});

// import './App.css';
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header/>
        <div className='w-full mx-auto container px-4'>
          <div className="container">
            <AddCollectionModal/>
            <Collections/>
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
