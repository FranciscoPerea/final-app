import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (countries.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
