import { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_COLLECTION } from "../mutations/collectionMutations";
import { GET_COLLECTIONS } from "../queries/collectionQueries";

function AddCollectionModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [chain, setChain] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [totalVolume, setTotalVolume] = useState('');
  const toggleModal = () => setModalVisible(!modalVisible);
  const [addCollection] = useMutation(ADD_COLLECTION, {
    variables: {name, image, description, chain, totalSupply, totalVolume},
    update(cache, {data: {addCollection}}) {
      const { collections } = cache.readQuery({query: GET_COLLECTIONS});
      cache.writeQuery({
        query: GET_COLLECTIONS,
        data: { collections: [...collections, addCollection]},
      });
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(name ==='' || image ===''|| description ===''|| chain ===''|| totalSupply ===''|| totalVolume ===''){
      return alert('Please fill in all fields');
    }
    setModalVisible(false);
    addCollection(name, image, description, chain, totalSupply, totalVolume);
    setName('');
    setImage('');
    setDescription('');
    setChain('');
    setTotalSupply('');
    setTotalVolume('');
  }

  return (
    <>
    
      {/* <!-- Modal toggle --> */}
      <button 
        data-modal-target="authentication-modal" 
        data-modal-toggle="authentication-modal" 
        onClick={() => toggleModal()}
        className=" text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        type="button"
        >
        Toggle modal
      </button>

      {/* <!-- Main modal --> */}
      <div id="authentication-modal" tabIndex="-1" aria-hidden="true" 
        onClick={(e) => {
          if(e.target === e.currentTarget) {
            setModalVisible(false);
          }
        }}
        className={` ${modalVisible ? 'block' : 'hidden'} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-scroll md:inset-0 h-full bg-gray-900/75`}>
          <div className="relative w-full h-full max-w-md mx-auto md:h-auto ">
              {/* <!-- Modal content --> */}
              <div className="relative rounded-lg shadow bg-gray-700">
                  <button 
                    type="button" 
                    onClick={()=>setModalVisible(false)}
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a Collection</h3>
                      <form className="space-y-6" onSubmit={onSubmit}>
                          <div>
                              <label htmlFor="collectionName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                              <input  
                                name="name" 
                                id="collectionName" 
                                type='text'
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex. Moonbirds" required/>
                          </div>
                          <div>
                              <label htmlFor="collectionImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Icon</label>
                              <input  
                                name="image" 
                                id="collectionImage" 
                                type='text'
                                value={image}
                                onChange={(e)=> setImage(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="http://www.imgur.com/image/location" required/>
                          </div>
                          <div>
                              <label htmlFor="collectionDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                              <textarea   
                                name="description" 
                                type='text'
                                id="collectionDescription" 
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[100px] dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="A collection of 10,000 PFPs which grants access. " required/>
                          </div>
                          <div>
                              <label htmlFor="collectionChain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chain</label>
                              <input  
                                name="chain" 
                                type='text'
                                id="collectionChain"
                                value={chain}
                                onChange={(e)=> setChain(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ethereum" required/>
                          </div>
                          <div>
                              <label htmlFor="collectionTotalSupply" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Supply</label>
                              <input
                                name="totalSupply" 
                                type="number" 
                                min="0"
                                pattern="^[0-9]*$"
                                id="collectionTotalSupply" 
                                value={totalSupply}
                                onChange={(e)=> {
                                  const inputValue = e.target.value;
                                  if (inputValue>=0 && inputValue.match(/^\d*$/)) {
                                    setTotalSupply(Math.max(inputValue, 0));
                                  }
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                placeholder="10000" 
                                required
                              />
                          </div>
                          <div>
                              <label htmlFor="collectionTotalVolume" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total  Volume</label>
                              <input  
                                name="totalVolume" 
                                type='number'
                                min="0"
                                id="collectionTotalVolume" 
                                value={totalVolume}
                                onChange={(e)=> {
                                  const inputValue = e.target.value;
                                  if (inputValue>=0 && inputValue.match(/^\d*$/)) {
                                    setTotalVolume(Math.max(inputValue, 0));
                                  }
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10732" required/>
                          </div>
                          <button
                            type="submit" 
                            data-modal-hide="authentication-modal"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Collection</button>
                      </form>
                  </div>
              </div>
          </div>
      </div> 

    </>
  )
}

export default AddCollectionModal