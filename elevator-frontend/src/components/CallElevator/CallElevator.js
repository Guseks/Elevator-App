import React, { useRef, useState } from 'react'
import "./callElevator.css"
import axios from 'axios';

const CallElevator = ({elevators}) => {

  const [alert, setAlert] = useState("");
  const [floor, setFloor] = useState("")
  const [inputError, setInputError] = useState("");
  const formRef = useRef();

  const topFloor = 10;

  const handleCallElevator = async () => {
    formRef.current.reset();
    let errorMessage = "";
    const numberFloor = parseInt(floor, 10);

    if(floor === ""){
      errorMessage = "No floor provided.";
    }
    else if(isNaN(numberFloor)){
      errorMessage = "Provided floor is not a number";
    }
    else if(floor > topFloor){
      errorMessage = "Provided floor is not available";
    }
    else if(floor < 1){
      errorMessage ="Lowest floor is 1, invalid floor number.";
      
    }
    else {
      try {
        const response = await axios.put("http://localhost:3000/api/elevator/call", {floor: numberFloor});

        if(response.status === 200){
          if(response.data.message === "Elevator already there"){
            setAlert(`There is already an elevator at floor ${floor}`);
          }
          else {
            setAlert("Elevator Called");
          }
          setTimeout(()=> {
            setAlert("");
          }, 3000);
        }
        
      }      
      catch (error){
        console.error("Error when calling elevator: ", error);
      }
    }
    if(errorMessage){
      setInputError(errorMessage);
      setTimeout(()=> setInputError(""), 2000);
    }
    
    setFloor("");
    
  }

  return (
    <div className='w-75 call-elevator-container d-block'>
      <h3 className='text-decoration-underline'>Call Elevator </h3>
      
      <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
        <div className='d-flex input-container'>
          <input className="form-control w-75" placeholder='Input number of desired floor' type="text" onChange={(e)=> setFloor(e.target.value)} />
          <button className="btn btn-secondary" onClick={()=> {
            handleCallElevator(); }}>Call Elevator
          </button>
        </div>
      </form>
        
      {alert && 
        <div className='alert alert-success' role='alert'>
          {alert}
        </div>
      }
      {inputError && <div className='alert alert-danger'>{inputError}</div>}
    </div>
  )
}


export default CallElevator