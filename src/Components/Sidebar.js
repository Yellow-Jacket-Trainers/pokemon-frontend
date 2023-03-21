import React from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap';

function Sidebar(props) {

  const { favorites, handleDelete } = props;
  return (
    <div>
      <h2>Favorite Mons</h2>
      <ListGroup>
        {favorites.map((favorite, idx) => (
          <ListGroup.Item key={idx}>
            <Image src={favorite.imageUrl} thumbnail />
            <Button onClick={() => handleDelete(idx)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );


}

export default Sidebar;
