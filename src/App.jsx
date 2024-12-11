import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import CountryList from './Components/CountryList';
import useSearchCountries from './Components/useSearchCountries';

const App = () => {
  const [query, setQuery] = useState('');
  const { data: countries, error } = useSearchCountries(query);

  const handleSearchChange = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div className="app-container">
      <SearchBar onSearchChange={handleSearchChange} />
      <CountryList countries={countries} error={error} />
    </div>
  );
};

export default App;
