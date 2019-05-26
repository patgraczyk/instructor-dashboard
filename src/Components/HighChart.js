import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid } from 'recharts';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart() {
  return (

 
 <LineChart width={500} height={300} data={data}>
 <XAxis dataKey="name"/>
 <YAxis/>
 <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
 <Line type="monotone" dataKey="uv" stroke="#8884d8" />
 <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
</LineChart>

  );
}