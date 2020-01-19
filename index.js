const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const {mongoose} = require("./db");

let employeeController = require("./controllers/employeeController");


const PORT = 5000;

app.get("/", (req,res)=>{
    res.send("Server Is Running");
});

app.listen(PORT,()=>{
    console.log(`Server is running at: ${PORT}`);
});

app.use(bodyParser.json());
app.use("/employees", employeeController);




