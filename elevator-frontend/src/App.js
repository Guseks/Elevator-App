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


  const handleCallElevator = async(desiredFloor) => {
     const response = await axios.put("http://localhost:3000/api/elevator/call", {floor: desiredFloor});
     console.log(response.data);
  }

  return (
    <div className='App'>
      <Heading  headline = {'Elevator App'}/>
      <ElevatorStatus elevators={elevators} />
      <CallElevator handleCallElevator={handleCallElevator}/>
    </div>
  )
}

export default App