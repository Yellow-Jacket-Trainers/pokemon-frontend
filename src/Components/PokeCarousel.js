import React from 'react';
import {Carousel} from 'react-bootstrap';

class PokeCarousel extends React.Component{

  render() {
    console.log('fetching images')
    let pokemonItems = [];
      pokemonItems = this.props.pokeData.map(pokeData => (
        <Carousel.Item key={pokeData._id}>
          <img
            src={pokeData.image}
            alt={pokeData.name}
          />
    
          <Carousel.Caption>
            {/* <h3>{pokeData.name}</h3> */}
            {/* <p>{pokeData.type}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ));
      
    return(
      <Carousel>{pokemonItems}</Carousel>
    )
  }
}

export default PokeCarousel;