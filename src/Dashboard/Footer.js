import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function footer(props){
    return(
    <div>
        <Paper>
        <Tabs
          value={0}
        //   onChange={this.handleChange}
          indicatorColor="#ef3340"
          textColor="ef3340"
          centered
        >
          <Tab label="Check the weather" target="_blank" href="https://www.j2ski.com/snow_forecast/"/>
          <Tab label="Contact SkiBro team" target="_blank" href="https://www.skibro.com/en/;"/>
          {/* <Tab label="Item Three" /> */}
        </Tabs>
      </Paper>
    </div>
    )
};

export default footer;

// still to do: 
// 1.add more styling to the footer 
// 2.update colors
// 3.Add links to the labels
