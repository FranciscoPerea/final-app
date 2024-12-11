import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags.svg} alt={`Bandera de ${country.name.common}`} />
      <h3>{country.name.common}</h3>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Población:</strong> {country.population}</p>
    </div>
  );
};

export default CountryCard;
