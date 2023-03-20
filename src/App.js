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
// import Home from './Home';
import Header from './Header';
import Footer from './Footer'
// import About from './About';

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
    let pokeData = await axios.get(`${process.env.REACT_APP_SERVER}/pokemon?name=${this.state.pokeName}`)
    console.log(pokeData.data)
    this.setState({
      pokeData:pokeData.data,
    }, console.log(this.state.pokeData))
    //console.log(this.state.movieData)
  }
 
  handlePokeInput = (event) => {
    this.setState({
      pokeName: event.target.value.toLowerCase(),
    }, console.log(this.state.pokeName));
  };

  



  render(){
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
      </>


    )


  }

}

export default App;
