var mongoose = require('mongoose');
var env= require('./env/development');
module.exports=mongoose.connect(env.connection, { useNewUrlParser: true }).then(()=>{
console.log('connection establish');
}).catch(err=>{
    console.log(err);
});