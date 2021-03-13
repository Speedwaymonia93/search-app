import React from 'react';

class Recipie extends React.Component{
   
    render(){
        let array = this.props.recipie.map(obj => Object.values(obj));
        let counter = 0;
        console.log(this.props.recipie);
        return(
            <div>
                {
                    array.map((element)=>{
                        return(
                            <p>{element.title}</p>
                        )
                    })
                }
            </div>
                )
    }
}



export default Recipie