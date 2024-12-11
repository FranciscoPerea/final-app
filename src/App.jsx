import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div className="app-container">
      <SearchBar onSearchChange={handleSearchChange} />
      <h2>Búsqueda de país: {query}</h2> {/* Mostrar el query ingresado */}
    </div>
  );
};

export default App;
