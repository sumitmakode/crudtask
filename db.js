 const mongoose = require("mongoose");
 const db = 'mongodb://localhost:27017/nayadb';

mongoose.connect(db,{ useNewUrlParser: true ,
    useUnifiedTopology: true },(err)=>{
if(!err){
    console.log("database connected");
}else{
    console.log("error in db connection" + JSON.stringify
    
    
     (err,undefined,2))
 }
})

 module.exports = mongoose;



