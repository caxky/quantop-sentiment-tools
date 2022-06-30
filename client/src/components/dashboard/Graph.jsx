import React from 'react';
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function Table(props) {

  const [graphData] = useState({
    labels: props.labels,
    datasets: [
      {
        label: props.label,
        backgroundColor: props.color,
        data: props.data,
      }
    ]
  });

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
    <Chart type="bar" data={graphData} options={graphOptions}/>
  )
}
