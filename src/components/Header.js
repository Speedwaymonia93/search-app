import React from 'react';
import '../style/header-style.css';
function Header(){
return(
    <>
    <h2 className="header-style">Recipie search app</h2>
      <p className="p-style">Find your favouirte recipie ideas</p>
      <p className="p-style">You can search by <span className="span-style">ingredients, counrty, cuisine, rating</span> or type the name of the dish</p>
    </>
)
}

export default Header