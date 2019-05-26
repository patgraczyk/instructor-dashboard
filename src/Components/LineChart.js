import React, { PureComponent, Fragment } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import SalesData from '../Data/SalesData.json'
import ChartTitles from './ChartTitles'

export default class Example extends PureComponent {
  render() {
    return (
      <Fragment>
      <ChartTitles> Sales Comparison</ChartTitles>
      <LineChart
        width={500}
        height={300}
        data={SalesData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sales 2019" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Sales 2018" stroke="#82ca9d" />
      </LineChart>
      </Fragment>
    );
  }
}