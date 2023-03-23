import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PokemonForm from './Components/PokemonForm';
// import {  Form, Button } from 'react-bootstrap';
import './Home.css';

// import { joinPaths } from '@remix-run/router';

class Home extends React.Component{

  render() {
    return(
      <>
      <div id="home-bg">
        <a href="/main">
          <img id="poke-logo" src="mainSplash.png" alt="pokedeck"/> 
        </a>
        
      </div>
           
        {/* <Form className="poke-form" id="poke-form"
        onSubmit={this.props.getPokeDataFromAPI}
        >
        
        <Form.Group  controlId="pokeInput" >
          <Form.Label>Which Pokemon interests you?</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="e.g. Gardevoir" 
          onChange={this.props.handlePokeInput}
          id="home-input"
          />
          </Form.Group>
        <Button type="submit" variant="danger">Explore!</Button>
        </Form> */}
      </>
    )
  }
}

export default Home;