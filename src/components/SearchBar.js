import React from 'react';
import '../style/search-bar-style.css';
import reciepiesList from '../data/recipies.json';
import Recipie from './RecipieList';

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: ''
        }
        this.searchUpdate = this.searchUpdate.bind(this);
    }

    searchUpdate(event){
        this.setState({searchField: event.target.value.substr(0,20)});
    }
    render(){
        let filteredRecipies = this.props.recipies.filter(
            (element)=>{
                return element.title.toLowerCase().indexOf(this.state.searchField.toLocaleLowerCase()) !== -1
            }
        );

        return(
            <>
            <div>
                {
                 filteredRecipies.map((recipie) => {
                     return(
                         <div>
                             <Recipie recipie={recipie} key={recipie.id} />
                        </div>
                     )
                 })   
                }
                <form className="form-style"> 
                    <input className="search-bar" type="text" value={this.state.searchField} onChange={this.searchUpdate}></input>
                    <button className="search-button" type="submit">Show recipie</button>
                </form>
            </div>
            </>
        )
    }
}


export default SearchBar