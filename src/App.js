import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from './Components/Sidebar';

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
    let url = `${process.env.REACT_APP_SERVER}/pokemon?name=${this.state.pokeName}`;
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
    // if (this.props.auth0.isAuthenticated) {

      try {
        //get token
        // const res = await this.props.auth0.getIdTokenClaims();
        // console.log(res);
        // const jwt = res.__raw;
        // console.log(jwt)
        // localStorage.setItem("jwt", jwt);
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/pokemondb',
          // headers: {
          //   'Authorization': `Bearer ${jwt}`
          // }
        }
        let results = await axios(config)

        // let results = await axios.get(`${SERVER}/book`);
        // // console.log(results)
        this.setState({
          team: results.data
        }
        ,()=> console.log(this.state.books)
        )
      } catch (error) {
        console.log('There was an error!:', error.response.data)
      }
    };

    //send Pokemon data to database when selected
    postPokemon = async (newPokemon) => {
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
        )
      }
      catch (error) {
        console.log('ERR', error.response.data)
      }
    };
  
  updatePokemon = async (e) => {
    try {
      let updatedPokemon = await axios.put(`${process.env.REACT_APP_SERVER}/pokemondb/${this.state.pokeData._id}`, this.state.pokeData);
      console.log(updatedPokemon.data);
      this.setState({
        pokeData: updatedPokemon.data,
      }, 
      () => console.log(this.state.pokeData)
      );
    } catch (error) {
      console.error(error);
    }
  }
  
    deletePokemon = async (id) => {
      try {
        // const res = await this.props.auth0.getIdTokenClaims();
        // console.log(res);
        // const jwt = res.__raw;
        // console.log(jwt)
        // localStorage.setItem("jwt", jwt);
        const config = {
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/pokemondb/${id}`,
          // headers: {
          //   'Authorization': `Bearer ${jwt}`
          // },
        }
        // let url = `${SERVER}/pokemondb/${id}`;
        await axios(config);
        let updatedTeam = this.state.pokeData.filter(pokemon => pokemon._id !== id);
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
      }
      // if (this.state.pokeData[0].types[1]) {
      //   newPokeMember.type2 = this.props.pokeData[0].types[1]
      // } 
      this.setState({
        favorites: [...this.state.favorites, newPokeMember]
      }, 
      () => this.postPokemon(newPokeMember)
      );
    }

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

            {/* <Route
              exact path="/"
              element={<PokemonStats
                pokeData={this.state.pokeData}
                handlePokeFav={this.handlePokeFav}
                />
                }>
            </Route> */}

             {/* <Route
              exact path="/"
              element={<PokeCarousel
                pokeData={this.state.pokeData}
                />}>
            </Route> */}

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
              handlePokeFav={this.handlePokeFav}
              />

            <PokeCarousel
                pokeData={this.state.pokeData} />
            
            <Sidebar
            favorites={this.state.favorites}
            getPokeDataFromDB={this.getPokeDataFromDB}
            team={this.state.team}
            deletePokemon={this.deletePokemon} 
            updatePokemon={this.updatePokemon}
            />
            </>
          }
            
          <Footer />
        </Router>



      </>
    )
  }
}

// export default withAuth0(App);
export default App;
