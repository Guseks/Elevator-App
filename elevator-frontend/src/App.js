import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

import Heading from './components/Heading/Heading';
import ElevatorStatus from './components/ElevatorStatus/ElevatorStatus';
import CallElevator from './components/CallElevator/CallElevator'


const App = () => {

  const [elevators, setElevators] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/elevator/")
    .then((res) => {
      const data = res.data;
      console.log(data);
      setElevators(data)
    })
    .catch(error => console.error("Something went wrong", error));
  },[]);

  return (
    <div className='App'>
      <Heading  headline = {'Elevator App'}/>
      <ElevatorStatus elevators={elevators} />
      <CallElevator />
    </div>
  )
}

export default App