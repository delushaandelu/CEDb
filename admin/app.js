/**
 * Created by delus on 4/8/2017.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

//Port Number
const port = 3000;

//Core middleware
app.use(cors());

//Body parser middleware setup
app.use(bodyParser.json());

app.use('/users', users);

//Index route
app.get('/', (req, res) =>{
  res.send('Invalid Connection call');
});

//start server
app.listen(port, () => {
  console.log('Server started in port :' +port);
});
