import React from 'react';
import {  ListGroup, Image  } from 'react-bootstrap';

class PokemonStats extends React.Component{

  render() {
    console.log(this.props.pokeData[0])
    // let pokemon = this.props.pokeData[0];



    return(
       <>
       {this.props.pokeData[0] &&
       <>
        <ListGroup>
        <ListGroup.Item>Pokemon Name: {this.props.pokeData[0].name}</ListGroup.Item>
        <ListGroup.Item>Pokemon Type: {this.props.pokeData[0].types}</ListGroup.Item>
        <ListGroup.Item>Pokemon Weakness: {this.props.pokeData[0].weaknesses[0].type}</ListGroup.Item>
        </ListGroup>   

       <Image
            src={`${this.props.pokeData[0].image}`}
            alt={`this is an image of ${this.props.pokeData[0].name}`} />
        </>
       }
       
      </>
      
    );
  }
}

export default PokemonStats;
