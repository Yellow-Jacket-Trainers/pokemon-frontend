import React from 'react';
import { ListGroup, Image, Button } from 'react-bootstrap';

function Sidebar(props) {

  const { favorites, handleDelete } = props;
  const handleAddFavorite = (favorite) => {
    if (favorites.length < 6) {
      setFavorites([...favorites, favorite]);
    } else {
      alert('The max team size is 6!');
    }
  };

  const handleDelete = (idx) => {
    setFavorites(favorites.filter((_, i) => i !== idx));
  };
  
  return (
    <div>
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


}

// export default Sidebar;
