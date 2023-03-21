import React from 'react';
import {Button, Container, ListGroup, Modal} from 'react-bootstrap';

class PokemonDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [
        {
          id: 1,
          name: 'Pikachu',
          type: 'Electric'
        },
        {
          id: 2,
          name: 'Charizard',
          type: 'Fire/Flying'
        },
        {
          id: 3,
          name: 'Bulbasaur',
          type: 'Grass/Poison'
        }
      ],
      showModal: false,
      selectedPokemon: null
    };
  }

  handleDelete = (id) => {
    const filteredPokemons = this.state.pokemons.filter((pokemon) => pokemon.id !== id);
    this.setState({ pokemons: filteredPokemons });
  }

  handleUpdate = () => {
    const updatedPokemons = this.state.pokemons.map((pokemon) => {
      if (pokemon.id === this.state.selectedPokemon.id) {
        return { ...pokemon, name: this.state.selectedPokemon.name, type: this.state.selectedPokemon.type };
      }
      return pokemon;
    });
    this.setState({ pokemons: updatedPokemons, selectedPokemon: null, showModal: false });
  }

  render() {
    const { pokemons, selectedPokemon, showModal } = this.state;

    return (
      <Container>
        <ListGroup>
          {pokemons.map((pokemon) => (
            <ListGroup.Item key={pokemon.id}>
              <span>{pokemon.name}</span>
              <span>{pokemon.type}</span>
              <Button variant="danger" onClick={() => this.handleDelete(pokemon.id)}>Delete</Button>
              <Button variant="primary" onClick={() => this.setState({ showModal: true, selectedPokemon: pokemon })}>Edit</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Modal show={showModal} onHide={() => this.setState({ showModal: false, selectedPokemon: null })}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Pokemon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label>Name:</label>
              <input type="text" value={selectedPokemon?.name} onChange={(e) => this.setState({ selectedPokemon: { ...selectedPokemon, name: e.target.value } })} />
            </div>
            <div>
              <label>Type:</label>
              <input type="text" value={selectedPokemon?.type} onChange={(e) => this.setState({ selectedPokemon: { ...selectedPokemon, type: e.target.value } })} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ showModal: false, selectedPokemon: null })}>Cancel</Button>
            <Button variant="primary" onClick={this.handleUpdate}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default PokemonDeck;
