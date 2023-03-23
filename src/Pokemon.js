import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import './Main.css'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import Sidebar from './Components/Sidebar';

// import Header from './Header';
// import Footer from './Footer';
// import About from './About';
// import Home from './Home';
import PokemonForm from './Components/PokemonForm';
import PokemonStats from './Components/PokemonStats';
import PokeCarousel from './Components/PokeCarousel';

class Pokemon extends React.Component {

  render(){
    // console.log(this.props.auth0.isAuthenticated)
    return (    
      <>
        <PokemonForm
          getPokeDataFromAPI={this.props.getPokeDataFromAPI}
          handlePokeInput={this.props.handlePokeInput}
          pokeData={this.props.pokeData}
        /> 

          {this.props.pokeData 
          &&
            <>
            <PokemonStats
              pokeName={this.props.pokeName}
              pokeData={this.props.pokeData} 
              postPokemon={this.props.postPokemon}
              getPokeDataFromDB={this.props.getPokeDataFromDB}
              handlePokeFav={this.props.handlePokeFav}
              />

            <PokeCarousel
              pokeData={this.props.pokeData} />
            
            <Sidebar
            // favorites={this.props.favorites}
            getPokeDataFromDB={this.props.getPokeDataFromDB}
            team={this.props.team}
            deletePokemon={this.props.deletePokemon} 
            updatePokemon={this.props.updatePokemon}
            />
            </>
          }



      </>
    )
  }
}

export default withAuth0(Pokemon);
// export default App;
