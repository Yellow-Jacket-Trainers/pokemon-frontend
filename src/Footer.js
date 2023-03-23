import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <p>Yellow Jacket Trainers</p>
        <img id="wu-tang" src="aboutUs/wu-tang-logo-1024x1024.jpeg" alt="our logo"/>
      </div>
    )
  }
}

export default Footer;
