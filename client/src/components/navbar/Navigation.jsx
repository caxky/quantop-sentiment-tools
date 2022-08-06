import React from 'react';
import { useState, useEffect } from 'react';
import './Navigation.scss';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailIcon from '@mui/icons-material/Mail';

import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLangChange = evt => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  })

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <Navbar className={`navbar${isMenuOpen === true ? ' open' : ''}`} variant="dark">
        <Navbar.Brand className='navbar-banner'>
          <div className='navbar-logo'>
          <Nav.Link as={Link} className="nav-link" to="/">
            <img src='/images/logo.svg' alt='logo' />
          </Nav.Link>
          </div>
          <div className='navbar-title'>
            <h4>{t('Sentiment Tools')}</h4>
          </div>
        </Navbar.Brand>

        <Nav className="navbar-nav">
          <Nav.Link className="nav-link" href="/">
            <HomeIcon />
            {t('Home')}
          </Nav.Link>

          <NavDropdown title={ 
              <span>
                <TimelineIcon />
                {t('Stocks')}
              </span> 
            } className="basic-nav-dropdown">
            <NavDropdown.Item href="/stocks/overall">{t('Overall')}</NavDropdown.Item>
            <NavDropdown.Item href="/stocks/news">{t('News')}</NavDropdown.Item>
            <NavDropdown.Item href="/stocks/reddit">{t('Reddit')}</NavDropdown.Item>
            <NavDropdown.Item href="/stocks/twitter">{t('Twitter')}</NavDropdown.Item>
          </NavDropdown>
          

          <NavDropdown title={ 
              <span>
                <CurrencyBitcoinIcon />
                {t('Crypto')}
              </span> 
            } className="basic-nav-dropdown">
            <NavDropdown.Item href="/crypto/overall">{t('Overall')}</NavDropdown.Item>
            <NavDropdown.Item href="/crypto/news">{t('News')}</NavDropdown.Item>
            <NavDropdown.Item href="/crypto/reddit">{t('Reddit')}</NavDropdown.Item>
            <NavDropdown.Item href="/crypto/twitter">{t('Twitter')}</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="nav-link" href="/learn">
            <MenuBookIcon />
            {t("Learn")}
          </Nav.Link>

          <Nav.Link className="nav-link" href="/contact">
            <MailIcon />
            {t('Contact')}
          </Nav.Link>
        </Nav>
        
        <FormControl variant="standard" size="small">
          <Select className='language-select' onChange={handleLangChange} label="Language" value={language} displayEmpty>
            <InputLabel sx={{mx:1}}>Language</InputLabel>
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="fr">FR</MenuItem>
          </Select>
        </FormControl>
      </Navbar>
      <div className={`navbar-button${isMenuOpen === true ? ' open' : ''}`}>
        <IconButton type="button" className="button small" onClick={toggleMenu}>
          {
            (isMenuOpen === true) 
            ? <ChevronRightIcon fontSize='large' style={{ color: 'white' }} stroke={"black"} stroke-width={0.7}/> 
            : <ChevronLeftIcon fontSize='large' style={{ color: 'white' }} stroke={"black"} stroke-width={0.7}/>
          }
        </IconButton>
      </div>
    </>
  )
}
