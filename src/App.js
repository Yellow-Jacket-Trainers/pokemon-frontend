import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import Home from './Home';
import Header from './Header';
import Footer from './Footer'
// import About from './About';
import PokemonForm from './Components/PokemonForm';
import PokemonStats from './Components/PokemonStats';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pokeName: '',
      pokeData:[],
      error:false,
      errorMessage:'',
      isLoggedIn: false
    }
  }


  handlePokeInput = (event) => {
    this.setState({
      pokeName: event.target.value.toLowerCase(),
    }, console.log(this.state.pokeName));
  };


  //get Pokemon data from API
  getPokeDataFromAPI = async (e) => {
    e.preventDefault();
    let pokeData = await axios.get(`${process.env.REACT_APP_SERVER}/pokemon?name=${this.state.pokeName}`)
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

  render(){
    return (
      <>
        <Router>
          <Header />
          <Routes>

            <Route
              exact path="/"
              element={<PokemonForm
                getPokeData={this.getPokeData}
                handlePokeInput={this.handlePokeInput}/>}>
            </Route>

            {/* <Route
              exact path="/"
              element={<PokemonStats
                pokeData={this.state.pokeData}
                />}>
            </Route> */}

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
      </>


    )
  }
}

// export default withAuth0(App);
export default App;
