import React from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap';

function Sidebar(props) {



  // componentDidMount() {
  //   this.props.getPokeDataFromDB()
  // }

  render() {
    console.log(this.props.favorites)
    console.log(this.props.team)
    
    let team = [];
    if (this.props.team) {
      team = this.props.team.map((member) => (
      <Team 
      _id={member._id}
      member={member}
      deletePokemon={this.props.deletePokemon}
      updatePokemon={this.props.updatePokemon}
      // handleUpdateMVP={this.handleUpdateMVP}
      />
    ))
  }

      return (
    <>
      <h3>Favorite Mons</h3>
      <ListGroup>
        {favorites.map((favorite, index) => (
          <ListGroup.Item key={index}>
            <Image 
            src={favorite.imageUrl}
            alt={favorite.name} 
            thumbnail />
            <span>{favorite.name}</span>
            <Button 
            onClick={() => handleDelete(index)}
            variant="danger">
              Delete
              </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );

class Team extends React.Component {

  handleUpdateMVP = (e) => {
    e.preventDefault();
    let PokemonToUpdate = {
      MVP: true ||this.props.member.MVP,
      name: this.props.member.name,
      type: this.props.member.types,
      weaknesses: this.props.member.weaknesses,
      _id: this.props.member._id,
      // !!!version "__v" has 2 underscores!!!
      __v: this.props.member.__v
    }
    this.props.updatePokemon(PokemonToUpdate);
    console.log(PokemonToUpdate)
  }

  render() {
    return(
      <ListGroup.Item key={this.props._id}>
      {this.props.member.name}

    <Button
      variant='warning'
      onClick={this.handleUpdateMVP} >
      Make MVP 
    </Button>
     
    <Button
      variant='danger'
      onClick={() => this.props.deletePokemon(this.props.member._id)}>
        Delete Pokemon
      </Button>
  </ListGroup.Item>
    )
  }

}

// export default Sidebar;
