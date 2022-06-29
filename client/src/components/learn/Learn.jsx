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
            <p>content here</p>
          </div>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>Fundamental Analysis</h5> 
          </div>
          <div className='section-content'>
            <p>content here</p>
            <img src='/images/stock-graph.jpg' alt='stock graph'></img>
          </div>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>Technical Analysis</h5>
          </div>
          <div className='section-content'>
            <p>content here</p>
            <img src='/images/stock-graph.jpg' alt='stock graph'></img>
          </div>
        </div>

        <div className='section'>
          <div className='section-title'>
            <h5>Common Terminology</h5>
          </div>
          <Row className='section-content'>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6><b>Item header</b></h6>
                  Item 1
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Item header</b></h6>
                  Item 2
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Item header</b></h6>
                  Item 3
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6><b>Item header</b></h6>
                  Item 1
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Item header</b></h6>
                  Item 2
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6><b>Item header</b></h6>
                  Item 3
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
