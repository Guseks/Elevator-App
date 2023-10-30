import React from 'react'
import "./callElevator.css"

const CallElevator = () => {

  const handleCallElevator = () => {
    
  }


  return (
    <div className='w-75 call-elevator-container d-block'>
      <h3 className='text-decoration-underline'>Call Elevator</h3>
      <div className='d-flex input-container'>
        <input className="form-control w-75"  type="text" />
        <button className="btn btn-secondary" onClick={handleCallElevator}>Call Elevator</button>
      </div>
      
    </div>
  )
}


export default CallElevator