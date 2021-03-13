import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/filter-options-components/FileterOptions';
import RecipieList from './components/RecipieList';

function App() {
  
  return (
    <div className="App">
      <Header/>
      {/*}
      <SearchBar />*/}
      <FilterOptions />
      <RecipieList />
      
    </div>
  );
}

export default App;
