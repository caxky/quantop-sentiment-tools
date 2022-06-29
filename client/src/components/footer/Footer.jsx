import React from 'react';
import './Footer.scss';
import { Row, Col } from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Row className='footer'>
      <Col />
      
      <Col className='copyright'>
        Copyright © 2022 Quantop
      </Col>
      
      <Col className='socials'>
        <IconButton aria-label='github' onClick={() => window.open("https://github.com/Quantop", "_blank")} style={{ color: 'white' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label='twitter' onClick={() => window.open("https://twitter.com/QuantopTech", "_blank")} style={{ color: 'white' }}>
          <TwitterIcon />
        </IconButton>
      </Col>
    </Row>
  )
}
