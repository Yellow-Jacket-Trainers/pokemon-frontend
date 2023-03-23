import React from 'react';
import { Navbar, Offcanvas, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

class Header extends React.Component {
  render() {

    return ( 
    <> 
        {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#">PokeDeck</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/main">Collection</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  {this.props.auth0.isAuthenticated
          ?
          <LogoutButton />
          : <LoginButton />
      }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* < Navbar expand = "xxl" bg = "info" variant = "dark" 
       breakpoints={['xxxl']}
       >
         
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/main" href="/Pokemon.js" className="nav-link">Collection</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" href="/About.js" className="nav-link">About</Link>
          </NavItem>

      </Navbar > */}
</>
    )
  }
}

// export default withAuth0(Header);
export default withAuth0(Header);
