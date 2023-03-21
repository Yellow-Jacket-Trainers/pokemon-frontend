import React from 'react';
import {  ListGroup, Image, Button } from 'react-bootstrap';

class PokemonStats extends React.Component{
  renderFavoriteButton() {
    if(this.props.pokeData.length > 0) {
      return (
        <Button
          onClick={() => this.props.addToFavorites(this.props.pokeData[0])}
          variant="success">
            Add to Favorites
          </Button>
      );
    }
  }
  render() {
    console.log(this.props.pokeData)

    return (
      <>
        {pokeData.length > 0 && (
          <>
            <Image
              src={pokeData[0].image}
              alt={`this is an image of ${pokeData[0].name}`}
            />
            <ListGroup>
              <ListGroup.Item>{pokeData[0].name}</ListGroup.Item>
              <ListGroup.Item>{pokeData[0].types[0]}</ListGroup.Item>
            </ListGroup>
            {this.renderFavoriteButton()}
          </>
        )}
      </>
    );
  }
}

export default PokemonStats;
