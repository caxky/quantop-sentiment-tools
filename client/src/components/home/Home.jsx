import React from 'react';
import './Home.scss';

export default function Home() {
  return (
    <div className='home'>
      <div className='home-banner'>
        <img src='/images/logo.png' alt='logo' />
        <h1>Sentiment Analysis Tools</h1>
      </div>

      <div className='tool-summary'>
        <div className='tool-summary-item'>
          Item summary
        </div>
      </div>

      <div className='sections'>
        <div className='section'>
          <div className='section-title'>
            <h5>Stock Analysis</h5>
          </div>
          <div className='section-content'>
            <img src='/images/stock-graph.jpg' alt='stock graph'></img>
            <p>Breakdown what the user will find here</p>
          </div>
        </div>
        <div className='section'>
          <div className='section-title'>
            <h5>Crypto Analysis</h5>
          </div>
          <div className='section-content'>
            <img src='/images/crypto-image.jpg' alt='bitcoin on circuit'></img>
            <p>Breakdown what the user will find here</p>
          </div>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>Learn</h5>
          </div>
          <div className='section-content'>
            <img src='/images/books.jpg' alt='books'></img>
            <p>Breakdown what the user will find here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
