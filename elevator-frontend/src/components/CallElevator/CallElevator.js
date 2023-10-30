import React, { useState } from 'react'
import "./callElevator.css"

const CallElevator = ({handleCallElevator}) => {

  const [floor, setFloor] = useState("")
  const [inputError, setInputError] = useState("");

  const topFloor = 10;
  
  const controlCallElevator = () => {
    console.log(floor);
    const numericFloor = parseInt(floor, 10);
    if(isNaN(numericFloor)){
      setInputError("Provided floor is not a number");
      setTimeout(()=> setInputError(""), 2000);
      return;
    }
    if(floor > topFloor){
      setInputError("Provided floor is not available");
      setTimeout(()=> setInputError(""), 2000);
      return;
    }
    if(floor < 1){
      setInputError("Lowest floor is 1, invalid floor number.");
      setTimeout(()=> setInputError(""), 2000);
      return;
    }

    handleCallElevator(floor);
  }


  return (
    <div className='w-75 call-elevator-container d-block'>
      <h3 className='text-decoration-underline'>Call Elevator </h3>
      <div className='d-flex input-container'>
        <input className="form-control w-75" placeholder='Input number of desired floor' type="text" onChange={(e)=> setFloor(e.target.value)} />
        <button className="btn btn-secondary" onClick={()=> {
          controlCallElevator();

        }}>Call Elevator</button>
      </div>
      {inputError && <div className='input-error text-danger'>{inputError}</div>}
    </div>
  )
}


export default CallElevator