const ElevatorModel = require('./elevatorModel');
const Elevator = require('./elevator');

async function updateElevatorInDatabase(elevator){
  try {
    const {id, currentFloor, status, destinationFloor, queue} = elevator;
    const query = {id: id};
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
      const { id, currentFloor, status, destinationFloor, queue } = elevatorData;
      elevators.push(new Elevator(id, currentFloor, status, destinationFloor, queue));
    }
    return elevators;
  }
  catch (error){
    console.error('Error when retrieving data from database: ', error);
  }
  
}

module.exports = {getAllElevators, updateElevatorInDatabase};