import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busca un país..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
