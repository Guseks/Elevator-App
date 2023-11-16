const mongoose = require('mongoose');
const ElevatorModel = require('./elevatorModel'); 
const Elevator = require('./elevator');

const dbPath = 'mongodb://127.0.0.1:27017/elevator-app';

mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    const count = await ElevatorModel.countDocuments();

    
    if (count === 0) {
      
      const numberOfElevators = 3;
      const startData = [];
      for(let i = 1; i<= numberOfElevators; i++){
        startData.push(new Elevator());
      }



      await ElevatorModel.insertMany(startData);
      console.log('Start data inserted successfully');
    } else {
      console.log('Database already contains data');
    }

    mongoose.disconnect();
  } catch (error) {
    console.error('Error during database initialization:', error);
    mongoose.disconnect();
  }
});
