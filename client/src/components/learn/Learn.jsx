import React from 'react';
import './Learn.scss';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Learn() {
  const { t, i18n } = useTranslation();

  return (
    <div className='learn'>
      <div className='learn-banner'>
        <h1>{t('Learn')}</h1>
      </div>

      <div className='sections'>
        <div className='section top'>
          <div className='section-title'>
            <h4>{t('Why Quantop Sentiment Tools?')}</h4>
          </div>
          <div className='section-content'>
            <p>
              {t('Continuous updates and support for the application will allow you to access the best sentiment analysis tools available. We utilize the latest technology to provide you with the most accurate and up-to-date data.')}
            </p>
          </div>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>{t('Fundamental Analysis')}</h5> 
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <img src='/images/stock-graph.jpg' alt='stock graph'></img>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>{t('Fundamental analysis is a method of determining a stock\'s real or \"fair market\" value.')}</li>
                <li>{t('Fundamental analysts search for stocks that are currently trading at prices that are higher or lower than their real value.')}</li>
                <li>{t('If the fair market value is higher than the market price, the stock is deemed to be undervalued and a buy recommendation is given.')}</li>
                <li>{t('In contrast, technical analysts ignore the fundamentals in favor of studying the historical price trends of the stock.')}</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>{t('Technical Analysis')}</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <img src='/images/stock-graph.jpg' alt='stock graph'></img>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>{t('Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities in price trends and patterns seen on charts.')}</li>
                <li>{t('Technical analysts believe past trading activity and price changes of a security can be valuable indicators of the security\'s future price movements.')}</li>
                <li>{t('Technical analysis may be contrasted with fundamental analysis, which focuses on a company\'s financials rather than historical price patterns or stock trends.')}</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>{t('Common Terminology')}</h5>
          </div>
          <Row className='section-content'>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6><b>{t('Bear market')}</b></h6>
                  {t('A bear market is one that is falling or trending lower.')}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>{t('Bull market')}</b></h6>
                  {t('A bull market is one that is rising or trending higher.')}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>{t('Capital gain or loss')}</b></h6>
                  {t('A capital gain is a profit or return on an investment.')}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6><b>{t('Market capitalization')}</b></h6>
                  {t('A company’s/currencies market cap is the cumulative value of all of its outstanding shares/tokens.')}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>{t('Volatility')}</b></h6>
                  {t('Volatility is the degree to which a traded asset varies or fluctuates in price over time.')}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>{t('Sentiment')}</b></h6>
                  {t('A view of or attitude toward a situation or event; an opinion.')}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
