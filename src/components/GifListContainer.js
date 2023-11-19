
import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    const fetchGifs = async () => {
      try {
        const apiKey = 'YOUR_GIPHY_API_KEY';
        const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=3`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        
        const gifList = data.data.slice(0, 3);

        
        setGifs(gifList);
      } catch (error) {
        console.error('Error fetching gifs:', error);
      }
    };

    
    fetchGifs();
  }, [searchTerm]);

  const handleSearchSubmit = (newSearchTerm) => {
    
    setSearchTerm(newSearchTerm);
  };

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
