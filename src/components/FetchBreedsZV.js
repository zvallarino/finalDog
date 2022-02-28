import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DogFactory from './DogFactory';

const BREED_LIST_URL = 'https://dog.ceo/api/breeds/list/all';

function FetchBreedsZV() {
  
  const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true);
      const response = await axios.get(BREED_LIST_URL);
      setDogs(Object.entries(response.data.message));
      setLoading(false);
      } 

      fetchBreeds();
    
  }, []);


  return (

    <DogFactory loading = {loading} dogs = {dogs} />
  
  );
}

export default FetchBreedsZV
