// Import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const exercisesRouter = require('../back/routes/exercises');
const usersRouter = require('../back/routes/users');

// Server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser : true, 
    useCreateIndex : true,
    useUnifiedTopology: true 
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database successfully connected');
});

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
