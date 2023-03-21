import React from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap';

function Sidebar(props) {

  const { favorites, handleDelete } = props;
  
  return (
    <div>
      <h3>Favorite Mons</h3>
      <ListGroup>
        {favorites.map((favorite, idx) => (
          <ListGroup.Item key={idx}>
            <Image src={favorite.imageUrl} thumbnail />
            <Button 
            onClick={() => handleDelete(idx)}
            variant="danger">
              Delete
              </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );


}

export default Sidebar;
