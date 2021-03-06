import React from 'react';
import axios from 'axios';
import './Dashboard.scss';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Dot } from 'react-animated-dots';
import Table from './Table.jsx';
import Graph from './Graph.jsx';

export default function Dashboard(props) {
  const [dashboardData, setDashboardData] = useState({table: [], positiveGraph: [], negativeGraph: []});
  const [tableHeader, setTableHeader] = useState("");
  const [isLoading, setLoading] = useState(true);

  const location = useLocation();

  function getDashboardData(path) {
    axios({
      method: "GET",
      url:"https://powerful-fjord-45838.herokuapp.com/"+path,
    })
    .then((response) => {
      const res = response.data
      setDashboardData(({
        table: res.table,
        positiveGraph : res.positiveGraph,
        negativeGraph : res.negativeGraph,
        marketCap : res.marketCap,
      }))
      setLoading(false)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }

  function getTableHeader(title) {
    if (title == "Cryptocurrency") setTableHeader("Crypto")
    else if (title == "Stocks") setTableHeader("Company")
  }

  useEffect(() => {
    getDashboardData(location.pathname);
    getTableHeader(props.title);
  }, [location])

  if (isLoading) {
    return <div className='loading'>Loading<Dot>.</Dot><Dot>.</Dot><Dot>.</Dot></div>;
  }
  
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
                    data={dashboardData.positiveGraph}
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
                    data={dashboardData.negativeGraph}
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
                <h3>Total market cap: ${dashboardData.marketCap/1000}B</h3>
                <Table 
                  header={tableHeader}
                  data={dashboardData.table}
                />
              </CardContent>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
