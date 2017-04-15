/**
 * Created by delus on 4/8/2017.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database);
mongoose.connection.on('Connected', () => {
  console.log('Connected to database'+config.database);
});

mongoose.connection.on('Connection Error', (err) => {
  console.log('Database Connection Error:' +err);
});

const app = express();

const users = require('./routes/users');

//Port Number
const port = 3000;

//Core middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware setup
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//Index route
app.get('/', (req, res) =>{
  res.send('Invalid Connection call');
});

//start server
app.listen(port, () => {
  console.log('Server started in port :' +port);
});
