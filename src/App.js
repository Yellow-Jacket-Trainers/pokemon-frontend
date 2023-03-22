import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import Sidebar from './Components/Sidebar';

import Header from './Header';
import Footer from './Footer'
import PokemonForm from './Components/PokemonForm';
import PokemonStats from './Components/PokemonStats';
import PokeCarousel from './Components/PokeCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: '',
      pokeData: [],
      error: false,
      errorMessage: '',
      isLoggedIn: false,
      favorites: []
    }
  }

  //get Pokemon data from API
  getPokeDataFromAPI = async (e) => {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/pokemondb?name=${this.state.pokeName}`;
    console.log(url);
    let pokeData = await axios.get(url);
    console.log(pokeData.data)
    this.setState({
      pokeData:pokeData.data,
    }, console.log(this.state.pokeData))
  }

    //send Pokemon data to database when selected
    postPoke = async (newPokemon) => {
      try {
        //get token
        // const res = await this.props.auth0.getIdTokenClaims();
        // console.log(res);
        // const jwt = res.__raw;
        // console.log(jwt)
        // localStorage.setItem("jwt", jwt);
        const config = {
          method: 'post',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/pokemondb',
          // headers: {
          //   'Authorization': `Bearer ${jwt}`
          // },
          data: newPokemon
  
        }
        // let url = `${SERVER}/pokemon`
        // const jwt = localStorage.getItem("jwt");
        let selectedPoke = await axios(config);
        console.log(selectedPoke.data);
        this.setState({
          pokeData: [...this.state.pokeData, selectedPoke.data]
        }, 
        console.log('selected poke sent to DB', this.state.pokeData))
      }
      catch (error) {
        console.log('ERR', error.response.data)
      }
    }
  
  updatePokemon = async (e) => {
    try {
      let updatedPokemon = await axios.put(`${process.env.REACT_APP_SERVER}/pokemondb/${this.state.pokeData._id}`, this.state.pokeData);
      console.log(updatedPokemon.data);
      this.setState({
        pokeData: updatedPokemon.data,
      }, () => console.log(this.state.pokeData));
    } catch (error) {
      console.error(error);
    }
  }
  
    deletePokeData = async (id) => {
      try {
        await axios.delete(`${process.env.REACT_APP_SERVER}/pokemondb/${id}`);
        this.setState(prevState => ({
          pokeData: prevState.pokeData.filter(pokemon => pokemon.id !== id)
        }))
      } catch (error) {
        console.log(error);
      }
    }

    handlePokeInput = (event) => {
      event.preventDefault();
      try {
        this.setState({
          pokeName: event.target.value.toLowerCase(),
        }, () => console.log(this.state.pokeName));
      } catch (error) {
        console.log(error);
      }
    };

  



  render(){
    return (    
      <>
        <Router>
          <Header />
          <Routes>
              <Route
              exact path="/"
              element={
              <PokemonForm
              getPokeDataFromAPI={this.getPokeDataFromAPI}
                handlePokeInput={this.handlePokeInput}
                />}>
            </Route>

            <Route
              exact path="/"
              element={<PokemonStats
                pokeData={this.state.pokeData}
                />}>
            </Route>

             <Route
              exact path="/"
              element={<PokeCarousel
                pokeData={this.state.pokeData}
                />}>
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
             
            {/* <PokemonStats
                pokeData={this.state.pokeData}
            /> */}

            <PokeCarousel
                pokeData={this.state.pokeData}
                />

             {/* <Sidebar
              favorites={this.state.favorites}
              handleDelete={this.handleDelete}
              /> */}
            
            <Footer />


          <Footer />
        </Router>



      </>
    )
  }
}

// export default withAuth0(App);
export default App;
