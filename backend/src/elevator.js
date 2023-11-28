class Elevator {
  constructor(elevator_id, currentFloor, status, destinationFloor, queue) {
    this.elevator_id = elevator_id;
    this.currentFloor = currentFloor || 1;
    this.status = status || 'idle'; 
    this.destinationFloor = destinationFloor || null; 
    this.queue = queue || [];
  } 

  // Methods to update elevator variables
  updateStatus(status) {
    this.status = status;    
  }
  updateDestination(destinationFloor){
    this.destinationFloor = destinationFloor;
  }
  updateCurrentFloor(floor){
    this.currentFloor = floor;
  }

  // Method to check if the elevator is available
  isAvailable() {
    return this.status === 'idle';
  }

  getQueueLength(){
    return this.queue.length;
  }

  //Calculates distance to potential destination if not busy
  calculateDistance(calledFloor) {
    return Math.abs(calledFloor - this.currentFloor);
  }

  //Calculates total distance for elevator, current operation + the suggested call. 
  calculateTotalDistance(calledFloor){
    let distanceToDestination = Math.abs(this.destinationFloor - this.currentFloor);
    let distanceToRequestedFloor = Math.abs(calledFloor - this.destinationFloor);
    return distanceToDestination + distanceToRequestedFloor;
  }


  //Queue a floor to move to if busy
  queueFloor(floor){
    this.queue.push(floor);
  }

  getNextQueuedFloor(){
    return this.queue.shift();
  }
  
 
}

module.exports = Elevator;