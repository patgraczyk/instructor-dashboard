import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Line, LineChart } from 'recharts';


class App extends Component {
    cursorStyle = {
        fill: 'white'
    };
    data = [
        { Year: "1929", BMW: "1889", Toyota: "9547", Mercedes: "4881"},
        { BMW: "6548", Mercedes: "8096", Toyota: "4741", Year: "1930"},
        { Year: "1931", BMW: "5013", Toyota: "6269", Mercedes: "3908"},
        { Year: "1932", BMW: "2468", Toyota: "9858", Mercedes: "1623"},
        { Year: "1933", BMW: "3364", Toyota: "5595", Mercedes: "8638"},
        { Year: "1934", BMW: "2032", Toyota: "2570", Mercedes: "8041"}
    ];
    render(){
        return (
            <BarChart
                width={600}
                height={300}
                data={this.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis type="category" dataKey="Year"/>
                <YAxis type="number"/>
                <Tooltip cursor={false}/>
                <Legend />
                <Bar dataKey="BMW" stroke="#8884d8" fill="#8884d8" background={{ stroke: '#eee' }} isAnimationActive={true} barSize={20}/>
                <Bar dataKey="Mercedes" stroke="#82ca9d" fill="#82ca9d" background={{ stroke: '#eee' }} isAnimationActive={false} barSize={30}/>
            </BarChart>
        )
    }
}

export default App;