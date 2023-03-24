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

// import Sidebar from './Components/Sidebar';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Pokemon from './Pokemon';
// import PokemonForm from './Components/PokemonForm';
// import PokemonStats from './Components/PokemonStats';
// import PokeCarousel from './Components/PokeCarousel';

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
      //  favorites: [],
       team:[],
       gotPoke:false,
     }
   }

  // //get Pokemon data from API
  getPokeDataFromAPI = async (e) => {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER}/pokemon?name=${this.state.pokeName}`;
    console.log(url);
    let pokeData = await axios.get(url);
    console.log(pokeData.data)
    this.setState({
      pokeData:pokeData.data,
      gotPoke: true,
    }
    )
  }

  //get pokemon from database
  getPokeDataFromDB = async () => {
   if (this.props.auth0.isAuthenticated) {
    console.log('get data from db')
      try {
        //get token
        const res = await this.props.auth0.getIdTokenClaims();
        // console.log(res);
        const jwt = res.__raw;
        // console.log(jwt)
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
        
        console.log(results.data)
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
        // console.log(jwt)
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
      // console.log(jwt)
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
        // console.log(res);
        const jwt = res.__raw;
        // console.log(jwt)
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
      if (this.props.auth0.isAuthenticated) {
              let newPokeMember = {
        name: this.state.pokeData[0].name,
        types: this.state.pokeData[0].types,
        weaknesses: this.state.pokeData[0].weaknesses,
        image: this.state.pokeData[0].image,
      }
      this.postPokemon(newPokeMember);
      }else{
        const { loginWithRedirect } = this.props.auth0;
        loginWithRedirect()
      }

      }

      // this.setState({
      //   team: [...this.state.team, newPokeMember]
      // },
      // () => console.log(`${this.state.team}`)
      // );
    

  render(){
    // console.log(this.props.auth0.isAuthenticated)
    return (    
      <>
        <Router>
          <Header />
          <Routes>
              {/* <Route
              exact path="/"
              element={
              <PokemonForm
              getPokeDataFromAPI={this.getPokeDataFromAPI}
              handlePokeInput={this.handlePokeInput}
                />}>
            </Route> */}

            <Route
              path="/about"
              element={<About />}>
              </Route>

               <Route
              path="/"
              element={<Home 
              getPokeDataFromAPI={this.getPokeDataFromAPI}
              handlePokeInput={this.handlePokeInput}
              />}>
              </Route> 
              
              <Route
              path="/main"
              element={
              <Pokemon 
              getPokeDataFromAPI={this.getPokeDataFromAPI}
              getPokeDataFromDB={this.getPokeDataFromDB}
              postPokemon={this.postPokemon}
              updatePokemon={this.updatePokemon}
              deletePokemon={this.deletePokemon}
              handlePokeInput={this.handlePokeInput}
              handlePokeFav={this.handlePokeFav}
              pokeName={this.state.pokeName}
              pokeType={this.state.pokeType}
              gotPoke={this.state.gotPoke}
              pokeData={this.state.pokeData}
              isLoggedIn={this.state.isLoggedIn}
              // favorite={this.state.favorites}
              team={this.state.team}
              />}>
              </Route> 

            </Routes>
            
          <Footer />
        </Router>



      </>
    )
  }
}

export default withAuth0(App);
// export default App;
