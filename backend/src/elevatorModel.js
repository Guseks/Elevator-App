const mongoose = require('mongoose');

const elevatorSchema = mongoose.Schema({
  elevator_id: Number,
  currentFloor: Number,
  status: String,
  destinationFloor: Number,
  queue: [ Number ]
}, {collection: 'elevators'});

const ElevatorModel = mongoose.model('Elevator', elevatorSchema);
module.exports = ElevatorModel;