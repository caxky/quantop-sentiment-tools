import React from 'react';
import { useState } from 'react';
import './Navigation.scss';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailIcon from '@mui/icons-material/Mail';

export default function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <Navbar className={`navbar${isMenuOpen === true ? ' open' : ''}`} variant="dark">
        <Navbar.Brand className='navbar-banner'>
          <div className='navbar-logo'>
          <Nav.Link className="nav-link" href="/">
            <img src='/images/logo.svg' alt='logo' />
          </Nav.Link>
          </div>
          <div className='navbar-title'>
            <h4>Sentiment Tools</h4>
          </div>
        </Navbar.Brand>

        <Nav className="navbar-nav">
          <Nav.Link className="nav-link" href="/">
            <HomeIcon />
            Home
          </Nav.Link>

          <NavDropdown title={ 
              <span>
                <TimelineIcon />
                Stocks
              </span> 
            } className="basic-nav-dropdown">
            <NavDropdown.Item href="/stocks">Overall</NavDropdown.Item>
            <NavDropdown.Item href="/stocks">News</NavDropdown.Item>
            <NavDropdown.Item href="/stocks">Reddit</NavDropdown.Item>
            <NavDropdown.Item href="/stocks">Twitter</NavDropdown.Item>
          </NavDropdown>
          

          <NavDropdown title={ 
              <span>
                <CurrencyBitcoinIcon />
                Crypto
              </span> 
            } className="basic-nav-dropdown">
            <NavDropdown.Item href="/crypto">Overall</NavDropdown.Item>
            <NavDropdown.Item href="/crypto">News</NavDropdown.Item>
            <NavDropdown.Item href="/crypto">Reddit</NavDropdown.Item>
            <NavDropdown.Item href="/crypto">Twitter</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="nav-link" href="/learn">
            <MenuBookIcon />
            Learn
          </Nav.Link>

          <Nav.Link className="nav-link" href="/contact">
            <MailIcon />
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className={`navbar-button${isMenuOpen === true ? ' open' : ''}`}>
        <IconButton type="button" className="button small" onClick={toggleMenu}>
          {
            (isMenuOpen === true) 
            ? <ChevronRightIcon fontSize='large'/> 
            : <ChevronLeftIcon fontSize='large'/>
          }
        </IconButton>
      </div>
      
    </>
  )
}
