import React, { Fragment } from 'react';
import './App.css';
import './Dashboard/Dashboard'
import Dashboard from './Dashboard/Dashboard';
import Footer from './Dashboard/Footer'
import Chart from './Components/Chart'

function App() {
  return (
    <div className="App">
      <Dashboard/>
      {/* <Footer/> */}
    </div>
  )
}

export default App;

