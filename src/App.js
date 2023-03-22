import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Carousel } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Components/Sidebar';
import Pokemon from './Components/PokemonForm';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import PokemonForm from './Components/PokemonForm';
import PokemonStats from './Components/PokemonStats';
import PokeCarousel from './Components/PokeCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: '',
      pokeType:'',
      pokeData: [],
      error: false,
      errorMessage: '',
      isLoggedIn: false,
      favorites: [],
      team:[],
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
    }
    // , console.log(this.state.pokeData)
    )}

  //get pokemon from database
  getPokeDataFromDB = async () => {
   if (this.props.auth0.isAuthenticated) {
    console.log('get data from db')
      try {
        //get token
        const res = await this.props.auth0.getIdTokenClaims();
        console.log(res);
        const jwt = res.__raw;
        console.log(jwt)
        localStorage.setItem("jwt", jwt);
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/pokemondb',
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        }
        let results = await axios(config)
        
        console.log(results)
        this.setState({
          team: results.data
        }
        )
      } catch (error) {
        console.log('There was an error!:', error.response)
      }
    };
  }

    //send Pokemon data to database when selected
    postPokemon = async (newPokemon) => {
      try {
        // get token
        const res = await this.props.auth0.getIdTokenClaims();
        console.log(res);
        const jwt = res.__raw;
        console.log(jwt)
        localStorage.setItem("jwt", jwt);
        const config = {
          method: 'post',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/pokemondb',
          headers: {
            'Authorization': `Bearer ${jwt}`
          },
          data: newPokemon
        }
        // const jwt = localStorage.getItem("jwt");
        let selectedPoke = await axios(config);
        console.log(selectedPoke.data);
          this.setState({
            team: [...this.state.team, selectedPoke.data]
          },
        // console.log(selectedPoke)
          )
      }
      catch (error) {
        console.log('ERR', error.response)
      }
    };
  
  updatePokemon = async (pokemonToUpdate) => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      console.log(res);
      const jwt = res.__raw;
      console.log(jwt)
      localStorage.setItem("jwt", jwt);
      const config = {
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/pokemondb/${pokemonToUpdate._id}`,
        headers: {
          'Authorization': `Bearer ${jwt}`
        },
        data: pokemonToUpdate
      }

      await axios(config);

      let updatedPokemonFromDb = await axios(config);
      console.log(updatedPokemonFromDb.data)

      let updatedTeam = this.state.team.map((member) => {
        return member._id === pokemonToUpdate._id
          ? updatedPokemonFromDb.data
          : member;
      });
      console.log(updatedTeam);
      this.setState({
        team: updatedTeam,
      });
    } catch (error) {
      console.error(error);
    }
  }
  
    deletePokemon = async (id) => {
      try {
        const res = await this.props.auth0.getIdTokenClaims();
        console.log(res);
        const jwt = res.__raw;
        console.log(jwt)
        // localStorage.setItem("jwt", jwt);
        const config = {
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/pokemondb/${id}`,
          headers: {
            'Authorization': `Bearer ${jwt}`
          },
        }

        await axios(config);
        let updatedTeam = this.state.team.filter(pokemon => pokemon._id !== id);
        this.setState({
          team: updatedTeam,
        });
      } catch (err) {
        console.log('ERR,', err.response.data)
      }
    }

    handlePokeInput = (event) => {
      event.preventDefault();
      try {
        this.setState({
          pokeName: event.target.value.toLowerCase(),
        }, 
        () => console.log(this.state.pokeName)
        );
      } catch (error) {
        console.log(error);
      }
    };

    handlePokeFav = (e) =>{
      e.preventDefault();
      let newPokeMember = {
        name: this.state.pokeData[0].name,
        types: this.state.pokeData[0].types,
        weaknesses: this.state.pokeData[0].weaknesses,
      }
      this.postPokemon(newPokeMember);
      // this.setState({
      //   team: [...this.state.team, newPokeMember]
      // },
      // () => console.log(`${this.state.team}`)
      // );
    }

  render(){
    console.log(this.props.auth0.isAuthenticated)
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
              path="/about"
              element={<About />}>
              </Route>

              {/* <Route
              path="/home"
              element={<Home />}>
              </Route> */}

            </Routes>

          {this.state.pokeData 
          &&
            <>
            <PokemonStats
              pokeName={this.state.pokeName}
              pokeData={this.state.pokeData} 
              postPokemon={this.postPokemon}
              getPokeDataFromDB={this.getPokeDataFromDB}
              handlePokeFav={this.handlePokeFav}
              />

            <PokeCarousel
                pokeData={this.state.pokeData}
                />

             <Sidebar
              favorites={this.state.favorites}
              handleDelete={this.handleDelete}
              />
            
          <Footer />
        </Router>



      </>
    )
  }
}

export default withAuth0(App);
// export default App;
