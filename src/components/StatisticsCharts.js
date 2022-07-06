import { Grid } from '@mui/material';
import React from 'react';
import { generateBarChartModel } from '../functions/statisticsData';
import BarChart from './BarChart';

const chartData = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 200, 255, 0.6)',
            'rgba(255, 100, 255, 0.6)',
            'rgba(255, 50, 255, 0.6)',
          ],
          borderWidth: 1,
        }
    ]
}

const StatisticsCharts = () => {
  return (
    <Grid sx={{display:'flex',maxWidth:700}}>
    <BarChart
        chartData={generateBarChartModel(20,15)}
        textTitle="Bar Chart"
    />
    <BarChart
        chartData={generateBarChartModel(20,15)}
        textTitle="Bar Chart"
    />
    </Grid>
  )
}

export default StatisticsCharts;