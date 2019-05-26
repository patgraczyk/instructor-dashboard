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
          <Tab label="Check the weather" />
          <Tab label="Contact SkiBro team" />
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
