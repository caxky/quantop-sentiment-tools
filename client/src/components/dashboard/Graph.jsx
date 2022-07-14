import React from 'react';
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';

export default function Table(props) {
  const [alignment, setAlignment] = useState('24h');
  const [graphData, setGraphData] = useState({});

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment == '24h') {
      setGraphData({
        labels: props.data[0].labels,
        datasets: [
          {
            label: props.label,
            backgroundColor: props.color,
            data: props.data[0].values,
          }
        ]
      })
    } else if (newAlignment == '7d') {
      setGraphData({
        labels: props.data[1].labels,
        datasets: [
          {
            label: props.label,
            backgroundColor: props.color,
            data: props.data[1].values,
          }
        ]
      })
    } else if (newAlignment == '30d') {
      setGraphData({
        labels: props.data[2].labels,
        datasets: [
          {
            label: props.label,
            backgroundColor: props.color,
            data: props.data[2].values,
          }
        ]
      })
    }
  };

  useEffect(() => {
    setGraphData({
      labels: props.data[0].labels,
      datasets: [
        {
          label: props.label,
          backgroundColor: props.color,
          data: props.data[0].values,
        }
      ]
    })
  }, [])

  const graphOptions = {
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        suggestedMax: 100,
        ticks: {
          stepSize: 10,
        }
      }
    }
  }

  return (
    <div className='graph'>
      <Chart type="bar" data={graphData} options={graphOptions}/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="24h">24h</ToggleButton>
          <ToggleButton value="7d">7d</ToggleButton>
          <ToggleButton value="30d">30d</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </div>
    
  )
}
