// 1. Import your models and routes
const Pet = require('./models/pet');  // Adjust the path to the correct location of your pet model
const Owner = require('./models/owner');  // Adjust the path to the correct location of your owner model

const petRoute = require("./routes/petRoutes");  // Adjust the path to the correct location of your pet routes
const ownerRoute = require("./routes/ownerRoutes");  // Adjust the path to the correct location of your owner routes

const express = require('express');
const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());

// 2. Use express.json() to parse incoming JSON requests and set up routes
app.use(express.json());
app.use("/api/pets", petRoute);
app.use("/api/owners", ownerRoute);

// 3. MongoDB Connection
const mongoose = require('mongoose');

// Update this with your MongoDB URI (local or Atlas)
mongoose.connect('mongodb://Student12:Password1@logan', { dbName: 'home12' }, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");

    // Start the server after a successful database connection
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to the database.", err);
  });
