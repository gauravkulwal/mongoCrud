const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/meanEmployee';

mongoose.connect(db , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('connected to database');
    }
})

module.exports = mongoose;
