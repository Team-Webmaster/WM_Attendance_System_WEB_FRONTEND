import { Button, Grid } from '@mui/material';
import React from 'react';
import { generateChartModel } from '../functions/statisticsData';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { UserContext } from '../store/Context';

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

const StatisticsCharts = (props) => {
  const {userData} = React.useContext(UserContext);
  return (
    <React.Fragment>
    <Grid sx={{display:'flex',maxWidth:700}}>
    {props.data.type.match('Bar Chart')?<><BarChart
        chartData={
          generateChartModel(props.data.attendDates,
            props.data.leaveDuration,
            props.data.noOfDates,
            userData.noOfAnnualLeaves)[0]}
        textTitle="Bar Chart"
    />
    <BarChart
        chartData={generateChartModel(props.data.attendDates,
          props.data.leaveDuration,
          props.data.noOfDates,
          userData.noOfAnnualLeaves)[1]}
        textTitle="Bar Chart"
    /></>:props.data.type.match('Pie Chart')?<>
    <PieChart
        chartData={generateChartModel(props.data.attendDates,
          props.data.leaveDuration,
          props.data.noOfDates,
          userData.noOfAnnualLeaves)[0]}
        textTitle="Pie Chart"
    />
    <PieChart
        chartData={generateChartModel(props.data.attendDates,
          props.data.leaveDuration,
          props.data.noOfDates,
          userData.noOfAnnualLeaves)[1]}
        textTitle="Pie Chart"
    />
    </>:<>
    <LineChart
        chartData={generateChartModel(props.data.attendDates,
          props.data.leaveDuration,
          props.data.noOfDates,
          userData.noOfAnnualLeaves)[0]}
        textTitle="Line Chart"
    />
    <LineChart
        chartData={generateChartModel(props.data.attendDates,
          props.data.leaveDuration,
          props.data.noOfDates,
          userData.noOfAnnualLeaves)[1]}
        textTitle="Line Chart"
    />
    </>}
    </Grid>
    <Button onClick={()=>props.setIsChart(false)} >Generate Again</Button>
    </React.Fragment>
  )
}

export default StatisticsCharts;