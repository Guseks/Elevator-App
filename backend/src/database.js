const ElevatorModel = require('./elevatorModel');
const Elevator = require('./elevator');
const mongoose = require('mongoose');

async function updateElevatorInDatabase(elevator){
  try {
    const {elevator_id, currentFloor, status, destinationFloor, queue} = elevator;
    const query = {elevator_id: elevator_id};
    await ElevatorModel.findOneAndUpdate(query, {
      $set: {
        currentFloor: currentFloor,
        status: status,
        destinationFloor: destinationFloor,
        queue: queue
      }
    });
  }
  catch (error){
    console.error('Error when updating elevator in the database: ', error);
  }
}

async function getAllElevators(){
  let elevators = [];
  try {
    const data = await ElevatorModel.find();
    for (const elevatorData of data){
      const { elevator_id, currentFloor, status, destinationFloor, queue } = elevatorData;
      elevators.push(new Elevator(elevator_id, currentFloor, status, destinationFloor, queue));
    }
    return elevators;
  }
  catch (error){
    console.error('Error when retrieving data from database: ', error);
  }
  
}

function shutdown(){
  mongoose.disconnect();
  console.log("Disconnected from MongoDB database");
}

module.exports = {getAllElevators, updateElevatorInDatabase, shutdown};