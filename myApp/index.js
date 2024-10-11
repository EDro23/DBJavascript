//1
const Course = require(`./models/schedule.model.js`);
const courseRoute = require ("./routes/course.route.js");

const express = require('express')
const app = express()
const port = 3000

//2
app.use(express.json());
app.use ("/api/courses", courseRoute);

//3
const mongoose = require('mongoose');

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
