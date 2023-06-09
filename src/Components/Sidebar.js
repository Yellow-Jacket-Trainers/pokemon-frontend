import React from 'react';
import { ListGroup, Button, Card, Col } from 'react-bootstrap';

class Sidebar extends React.Component {



  // componentDidMount() {
  //   this.props.getPokeDataFromDB()
  // }

  render() {
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
      {/* <h3>Favorite Mons</h3> */}
      <ListGroup className="fav-mon">
        {team}
      </ListGroup>
        
        
        </>
  );
  }
}

class Team extends React.Component {

  handleUpdateMVP = (e) => {
    e.preventDefault();
    let PokemonToUpdate = {
      MVP: true ||this.props.member.MVP,
      name: this.props.member.name,
      type: this.props.member.types,
      weaknesses: this.props.member.weaknesses,
      image: this.props.member.image,
      _id: this.props.member._id,
      // !!!version "__v" has 2 underscores!!!
      __v: this.props.member.__v
    }
    this.props.updatePokemon(PokemonToUpdate);
    console.log(PokemonToUpdate)
  }

  render() {
    return(

      <>

      <Col>
      <Card style={{ width: '22rem', height: '500px'}} 
      className={this.props.member.MVP ? 'MVP' : ''}>
        <Card.Img variant="bottom" src={this.props.member.image}/>
        <Card.Body>
          <Card.Title>{this.props.member.name}</Card.Title>
          <Card.Text>
            {this.props.member.types}
          </Card.Text>
          <Button
            variant='info'
            onClick={this.handleUpdateMVP}>
            Make MVP
          </Button>

          <Button
            variant='danger'
            onClick={() => this.props.deletePokemon(this.props.member._id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      
      {/* <ListGroup.Item
        key={this.props.member._id}
        className={this.props.member.MVP ? 'MVP' : ''}
      >
          {this.props.member.image}
          {this.props.member.name}

          <Button
            variant='info'
            onClick={this.handleUpdateMVP}>
            Make MVP
          </Button>

          <Button
            variant='danger'
            onClick={() => this.props.deletePokemon(this.props.member._id)}>
            Delete Pokemon
          </Button>
        </ListGroup.Item> */}
        </Col>
        </>
    )
  }

}

export default Sidebar;
