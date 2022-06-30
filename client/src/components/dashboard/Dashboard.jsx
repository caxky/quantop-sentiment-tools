import React from 'react';
import './Dashboard.scss';
import { Row, Col } from 'react-bootstrap';
import { Card, CardHeader, CardContent } from '@mui/material';
import Table from './Table.jsx';
import Graph from './Graph.jsx';

export default function Dashboard(props) {
  return (
    <div className='dashboard'>
      <div className='dashboard-banner'>
        <h1>{props.title} Dashboard</h1>
      </div>
      <div className='dashboard-content'>
        <div className='dashboard-graphs'>
          <Row>
            <Col lg={6} md={12}>
              <Card variant="outlined">
                <CardHeader title="Most Positive Sentiments" sx={{ padding: 1 }}/>
                <CardContent>
                  <Graph 
                    label="Positive Sentiment"
                    color='#27C225'
                    labels={props.labels}
                    data={[78, 79, 80, 81, 82, 83, 84, 85, 86, 87]}
                  />
                </CardContent>
              </Card>
            </Col>
            <Col lg={6} md={12}>
              <Card variant="outlined">
                <CardHeader title="Most Negative Sentiments" sx={{ padding: 1 }} />
                <CardContent>
                  <Graph 
                    label="Negative Sentiment"
                    color='#C42121'
                    labels={props.labels}
                    data={[40, 39, 38, 37, 36, 35, 34, 33, 32, 31]}
                  />
                </CardContent>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <Card variant="outlined">
              <CardContent>
                <Table />
              </CardContent>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
