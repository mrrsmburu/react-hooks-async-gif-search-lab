
import React, { useState } from 'react';

const GifSearch = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    onSearchSubmit(searchTerm);
  };

  const handleChange = (event) => {
    
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Gifs:
        <input type="text" value={searchTerm} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
