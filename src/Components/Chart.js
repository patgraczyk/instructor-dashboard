import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Line, LineChart } from 'recharts';
import ActivitiesData from '../Data/ActivitiesData.json'

class Chart extends Component {
    cursorStyle = {
        fill: 'white'
    };
    render(){
        return (
            <BarChart
                width={600}
                height={300}
                data= {ActivitiesData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis type="category" dataKey="Year"/>
                <YAxis type="number"/>
                <Tooltip cursor={false}/>
                <Legend />
                <Bar dataKey="Skiing" stroke="#193256" fill="#193256" background={{ stroke: '#eee' }} isAnimationActive={true} barSize={20}/>
                <Bar dataKey="Snowboarding" stroke="#ef3340" fill="#ef3340" background={{ stroke: '#eee' }} isAnimationActive={false} barSize={30}/>
            </BarChart>
        )
    }
}

export default Chart;