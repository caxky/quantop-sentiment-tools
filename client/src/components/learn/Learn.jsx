import React from 'react';
import './Learn.scss';
import { Row, Col, ListGroup } from 'react-bootstrap';

export default function Learn() {
  return (
    <div className='learn'>
      <div className='learn-banner'>
        <h1>Learn</h1>
      </div>

      <div className='sections'>
        <div className='section top'>
          <div className='section-title'>
            <h4>Why Quantop Sentiment Tools?</h4>
          </div>
          <div className='section-content'>
            <p>
              Continuous updates and support for the application will allow you to access 
              the best sentiment analysis tools available. We utilize the latest technology
              to provide you with the most accurate and up-to-date data.
            </p>
          </div>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>Fundamental Analysis</h5> 
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <img src='/images/stock-graph.jpg' alt='stock graph'></img>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>Fundamental analysis is a method of determining a stock's real or "fair market" value.</li>
                <li>Fundamental analysts search for stocks that are currently trading at prices that are higher or lower than their real value.</li>
                <li>If the fair market value is higher than the market price, the stock is deemed to be undervalued and a buy recommendation is given.</li>
                <li>In contrast, technical analysts ignore the fundamentals in favor of studying the historical price trends of the stock.</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>Technical Analysis</h5>
          </div>
          <Row className='section-content'>
            <Col md={4}>
              <img src='/images/stock-graph.jpg' alt='stock graph'></img>
            </Col>
            <Col md={8}>
              <ul className='breakdown-list'>
                <li>Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities in price trends and patterns seen on charts.</li>
                <li>Technical analysts believe past trading activity and price changes of a security can be valuable indicators of the security's future price movements.</li>
                <li>Technical analysis may be contrasted with fundamental analysis, which focuses on a company's financials rather than historical price patterns or stock trends.</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>Common Terminology</h5>
          </div>
          <Row className='section-content'>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6><b>Bear market</b></h6>
                  A bear market is one that is falling or trending lower.
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Bull market</b></h6>
                  A bull market is one that is rising or trending higher.
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Capital gain or loss</b></h6>
                  A capital gain is a profit or return on an investment.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6><b>Market capitalization</b></h6>
                  A company’s/currencies market cap is the cumulative value of all of its outstanding shares/tokens.
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Volatility</b></h6>
                  Volatility is the degree to which a traded asset varies or fluctuates in price over time.
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Sentiment</b></h6>
                  A view of or attitude toward a situation or event; an opinion.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
