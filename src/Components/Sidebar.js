import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

class Sidebar extends React.Component {

  componentDidMount() {
    this.props.getPokeDataFromDB()
  }

  render() {
    console.log(this.props.favorites)
    console.log(this.props.team)
    let team = [];
    if (this.props.favorites) {
      team = this.props.favorites.map((member) => (
      <Team 
      key={member._id}
      member={member}
      deletePokemon={this.props.deletePokemon}
      updatePokemon={this.props.updatePokemon}
      />
    

    ))
          }

      return (
    <>
      <h3>Favorite Mons</h3>
      <ListGroup>
        {team}
      </ListGroup>
        
        
        </>
  );
  }
}

class Team extends React.Component {
  render() {
    return(
      <ListGroup.Item>
      {this.props.member.name}

    {/* <Button
      variant='warning'
      onClick={this.props.updatePokemon} >
      Make MVP 
    </Button>
     */}
    <Button
      variant='danger'
      onClick={() => this.props.deletePokemon(this.props.member._id)}>
        Delete Pokemon
      </Button>
  </ListGroup.Item>
    )

  }

}

export default Sidebar;
