import React from 'react';
import axios from 'axios';
import './Dashboard.scss';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@mui/material';
import Table from './Table.jsx';
import Graph from './Graph.jsx';

export default function Dashboard(props) {
  const [tableData, setTableData] = useState([]);

  const location = useLocation();

  function getTableData(path) {
    axios({
      method: "GET",
      url:"http://localhost:5000"+path,
    })
    .then((response) => {
      const res = response.data
      setTableData(({data: res.data}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  useEffect(() => {
    getTableData(location.pathname);
  }, [location])

  return (
    <div className='dashboard'>
      <div className='dashboard-banner'>
        <h1>{props.title} Dashboard &mdash; {props.subtitle}</h1>
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
                <Table 
                  data={tableData.data}
                />
              </CardContent>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
