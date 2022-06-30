import React from 'react';
import './Home.scss';
import { Col, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-banner'>
        <div className='home-banner-logo'>
          <img src='/images/logo.svg' alt='logo' />
        </div>
        <h2>Sentiment Analysis Tools</h2>
      </div>

      <div className='tool-summary'>
        <div className='tool-summary-item'>
          <p>
            Stock Sentiment Analysis,
            Cryptocurrency Analysis,
            Learning
          </p>
        </div>
      </div>

      <div className='sections'>
        <Col className='section' md={8}>
          <div className='section-title'>
            <h5>Stock Analysis</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <img src='/images/stock-graph.jpg' alt='stock graph'></img>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>Current price and sentiment data</li>
                <li>Most positive/most negative sentiment graphs</li>
                <li>Time scales</li>
                <li>Data table for thousands of companies</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className='section' md={8}>
          <div className='section-title'>
            <h5>Cryptocurrency Analysis</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <img src='/images/crypto-image.jpg' alt='bitcoin on circuit'></img>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>Current price and sentiment data</li>
                <li>Most positive/most negative sentiment graphs</li>
                <li>Time scales</li>
                <li>Data table for hundreds of currencies</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className='section' md={8}>
          <div className='section-title'>
            <h5>Learn</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <img src='/images/books.jpg' alt='books'></img>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>Technical analysis</li>
                <li>Fundamental analysis</li>
                <li>Common terms</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  )
}
