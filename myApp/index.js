//1
const Course = require(`./models/schedule.model.js`);

const express = require('express')
const app = express()
const port = 3000

//2
app.use(express.json());

//3
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/courses', async (req, res) => {
  // The browser uses the GET mothod to send any message, so 
  // use postman to send a POST message to the app.
  try {
      // Here we'll use our model to save the data.
  // we expect req.body will contain a course record to save to the db.
      const sched = await Course.create(req.body);
      res.status(200).json(sched);
  }
  catch (error) {
      res.status(500).json({ message: error.message });
  }
});

//app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
//})

mongoose.connect('mongodb://Student12:Password1@logan', { dbName: 'home12' })
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Failed to connect to the database.");
    });
