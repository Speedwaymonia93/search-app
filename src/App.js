import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/filter-options-components/FileterOptions';
import recipiesData from './data/recipies.json';


function App() {
  return (
    <div className="App">
      <Header/>
      <FilterOptions data={recipiesData}/>
      <SearchBar data={recipiesData}/>
      
      {/*
      {
        recipiesData.map(element => (
          <Recipie title={element.title} rating={element.rating} key={element.id} ingredients={element.ingredients}/>
        ))
      }
      */}
      
    </div>
  );
}

export default App;
