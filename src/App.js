import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/filter-options-components/FileterOptions';
import Recipie from './components/Recipie';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar />
      <FilterOptions />
      <Recipie />
      
    </div>
  );
}

export default App;
