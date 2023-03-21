import React from 'react';
import {  ListGroup, Image  } from 'react-bootstrap';

class PokemonStats extends React.Component{

  render() {


    return(
      <>
      <Image 
      src={this.props.pokeData[0].image}
      alt= {`this is an image of ${this.props.pokeData[0].name}`}
      />
      <ListGroup>
        <ListGroup.Item>{this.props.pokeData[0].name}</ListGroup.Item>
        <ListGroup.Item>{this.props.pokeData[0].types[0]}</ListGroup.Item>
      </ListGroup>
      </>
      
    );
  }
}

export default PokemonStats;
