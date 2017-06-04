const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

//on connection
mongoose.connection.on("connected",() => {
    console.log('connected '+ config.database);
})

//on error
mongoose.connection.on('error',(err) => {
    console.log('Database Error '+ err);
})

const app = express();

const user = require('./routes/users');
const cuser = require('./routes/cusers');
const movie = require('./routes/movie');
const channel = require('./routes/channel');
const actor = require('./routes/actor');

//port number
const port=4100;


//Cors Middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parse Middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//routes
app.use('/users',user);
app.use('/cusers',cuser);
app.use('/movie',movie);
app.use('/channel',channel)
app.use('/actor',actor)

//Index Route
app.get('/',(req, res)=>{
    res.send('Invaild end point');
});

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

//Start Server
app.listen(port,()=>{
    console.log('Server Started on Port '+port);
})