import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

import SearchForm from './Components//SearchForm';
import GifList from './Components/GifList';

function App() {
  const [ data, setData ] = useState([]);
  const [ query, setQuery ] = useState('cats');
  const performSearch = ( value )=> setQuery(value);
  useEffect( () => {
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=6r6ZPCbdpEuVFo3gw8rOF8ccLS9I6CPt`)
      .then(response => setData(response.data.data))
      .catch(error => console.log({ message: 'Error fetching and parsing data', error: error.message }));
  }, [ query ]);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        <GifList data={data} />
      </div>
    </>
  );
}

export default App

