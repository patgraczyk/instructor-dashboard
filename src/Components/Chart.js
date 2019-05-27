import React, { Component, Fragment } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import ActivitiesData from '../Data/ActivitiesData.json'
import ChartTitles from './ChartTitles'

class Chart extends Component {
    render(){
        return (
            <Fragment>
            <ChartTitles> Activity type comparison</ChartTitles>
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
            </Fragment>
        )
    }
}

export default Chart;