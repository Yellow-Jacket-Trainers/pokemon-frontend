import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Pokemon from './Components/PokemonForm';
import Header from './Header';
import Footer from './Footer'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pokeName: '',
      pokeData:{},
      error:false,
      errorMessage:'',
      isLoggedIn: false
    }
  }

  getPokeData = async (e) => {
    e.preventDefault();
    try {
      let pokeData = await axios.get(`${process.env.REACT_APP_SERVER}/pokemon?name=${this.state.pokeName}`);
      console.log(pokeData.data);
      this.setState({
        pokeData: pokeData.data,
      }, () => console.log(this.state.pokeData));
    } catch (error) {
      console.error(error);
    }
  }
  
  updatePokemon = async (e) => {
    e.preventDefault();
    try {
      let updatedPokemon = await axios.put(`${process.env.REACT_APP_SERVER}/pokemon/${this.state.pokeData._id}`, this.state.pokeData);
      console.log(updatedPokemon.data);
      this.setState({
        pokeData: updatedPokemon.data,
      }, () => console.log(this.state.pokeData));
    } catch (error) {
      console.error(error);
    }
  }
  

  DeletePokemon = async (e) => {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/pokemon`
  }
 
  handlePokeInput = (event) => {
    this.setState({
      pokeName: event.target.value.toLowerCase(),
    }, console.log(this.state.pokeName));
  };

  render(){
    let pokemonItems = [];
    if (this.state.pokeData.length) {
      pokemonItems = this.state.pokeData.map(pokeData => (
        <Carousel.Item key={pokeData._id}>
          <img
            className="d-block w-100"
            // src="book-bg.jpg"
            alt="Pokemon"
          />
    
          <Carousel.Caption>
            <h3>{pokeData.title}</h3>
            <p>{pokeData.description}</p>
            <p>{pokeData.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ));
    }

    return (    
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<Pokemon 
                getPokeData={this.getPokeData}
                handlePokeInput={this.handlePokeInput}/>}>
            </Route>
            {/* <Route
              path="/about"
              element={<About />}>
              </Route> */}
              {/* <Route
              path="/home"
              element={<Home />}>
              </Route> */}
          </Routes>
          <Footer />
        </Router>
        <Carousel>{pokemonItems}</Carousel>
      </>
    )
  }
}

export default App;
