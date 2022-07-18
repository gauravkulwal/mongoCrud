const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
var mongoose = require('./db');
var api = require('./controller/empRouter');
app.use(express.json());
app.use(cors());
app.use('/employee' , api)
app.listen(PORT , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('connected to port', + PORT);
    }
})
