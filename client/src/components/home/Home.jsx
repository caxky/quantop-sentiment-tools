import React from 'react';
import './Home.scss';
import { Col, Row } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className='home'>
      <div className='home-banner'>
        <div className='home-banner-logo'>
          <img src='/images/logo.svg' alt='logo' />
        </div>
        <h2>{t('Sentiment Analysis Tools')}</h2>
      </div>

      <div className='tool-summary'>
        <div className='tool-summary-item'>
          <p>
            {t('Stock Analysis\, Cryptocurrency Analysis\, Learning')}
          </p>
        </div>
      </div>

      <div className='sections'>
        <Col className='section' md={8}>
          <div className='section-title'>
            <h5>{t('Stock Analysis')}</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <a href="/stocks/overall">
                <img src='/images/stock-graph.jpg' alt='stock graph'></img>
              </a>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>{t('Current price and sentiment data')}</li>
                <li>{t('Most positive/most negative sentiment graphs')}</li>
                <li>{t('Time scales')}</li>
                <li>{t('Data table for thousands of companies')}</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className='section' md={8}>
          <div className='section-title'>
            <h5>{t('Cryptocurrency Analysis')}</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <a href="/crypto/overall">
                <img src='/images/crypto-image.jpg' alt='bitcoin on circuit'></img>
              </a>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>{t('Current price and sentiment data')}</li>
                <li>{t('Most positive/most negative sentiment graphs')}</li>
                <li>{t('Time scales')}</li>
                <li>{t('Data table for hundreds of currencies')}</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className='section' md={8}>
          <div className='section-title'>
            <h5>{t('Learn')}</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <a href="/learn">
                <img src='/images/books.jpg' alt='books'></img>
              </a>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>{t('Technical analysis')}</li>
                <li>{t('Fundamental analysis')}</li>
                <li>{t('Common terms')}</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  )
}
