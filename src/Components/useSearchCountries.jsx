import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearchCountries = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
        setData(response.data);
        setError(null); 
      } catch (err) {
        setError('No se pudo encontrar ningún país con ese nombre.');
        setData([]); 
      }
    };

    fetchData();
  }, [query]); // Ejecutar cada vez que `query` cambie

  return { data, error };
};

export default useSearchCountries;
