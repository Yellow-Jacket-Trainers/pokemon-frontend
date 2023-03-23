import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

class PokemonForm extends React.Component{

  render() {
    return(
      <>      
        <Form className="poke-form" 
        onSubmit={this.props.getPokeDataFromAPI}>

        <Form.Group  controlId="pokeInput">
          <Form.Label>Which Pokemon interests you?</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="e.g. Gardevoir" 
          onChange={this.props.handlePokeInput}/>
        </Form.Group>
        <Button type="submit">Go!</Button>
        </Form>
      </>
    )
  }
}

export default PokemonForm;