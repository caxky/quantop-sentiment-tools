import React from 'react';
import './Navigation.scss';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailIcon from '@mui/icons-material/Mail';

export default function Navigation() {
  return (
    <>
      <Navbar className='navbar'>
        <Navbar.Brand className='navbar-banner'>
          <div className='navbar-logo'>
            <img src='/images/logo.png' alt='logo' />
          </div>
          <div className='navbar-title'>
            <h4>Sentiment Tools</h4>
          </div>
        </Navbar.Brand>

        <Nav className="navbar-nav">
          <Nav.Link className="nav-link" href="#">
            <HomeIcon />
            Home
          </Nav.Link>

          <NavDropdown title={ 
              <span>
                <TimelineIcon />
                Stocks
              </span> 
            } className="basic-nav-dropdown">
            <NavDropdown.Item href="#">Overall</NavDropdown.Item>
            <NavDropdown.Item href="#">News</NavDropdown.Item>
            <NavDropdown.Item href="#">Reddit</NavDropdown.Item>
            <NavDropdown.Item href="#">Twitter</NavDropdown.Item>
          </NavDropdown>
          

          <NavDropdown title={ 
              <span>
                <CurrencyBitcoinIcon />
                Crypto
              </span> 
            } className="basic-nav-dropdown">
            <NavDropdown.Item href="#">Overall</NavDropdown.Item>
            <NavDropdown.Item href="#">News</NavDropdown.Item>
            <NavDropdown.Item href="#">Reddit</NavDropdown.Item>
            <NavDropdown.Item href="#">Twitter</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="nav-link" href="#">
            <MenuBookIcon />
            Learn
          </Nav.Link>

          <Nav.Link className="nav-link" href="#">
            <MailIcon />
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}
