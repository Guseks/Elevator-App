const mongoose = require('mongoose');
const ElevatorModel = require('./elevatorModel'); 
const Elevator = require('./elevator');


async function initializeDatabase(){
  const dbPath = 'mongodb://127.0.0.1:27017/elevator-app';

  try {
    await mongoose.connect(dbPath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    const count = await ElevatorModel.countDocuments();

    if (count === 0) {
      const numberOfElevators = 3;
      const startData = [];
      for (let i = 1; i <= numberOfElevators; i++) {
        startData.push(new Elevator(i));
      }

      await ElevatorModel.insertMany(startData);
      console.log('Start data inserted successfully');
    } else {
      console.log('Database already contains data');
    }
  } catch (error) {
    console.error('Error during database initialization:', error);
  }
}

module.exports = initializeDatabase;
