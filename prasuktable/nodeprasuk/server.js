const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//database connection
require ("./mongo")

//create model
require("./post");

//middleware
app.use(bodyParser.json())
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const Data = mongoose.model("data");

app.get("/getvehicledata" ,async (req, res) => {
    try {
        const post = await Data.find({})
        res.send(post)
    } catch (error) {
        res.status(500)
    }
})

app.post("/vehicledata", (req, res) =>{
    try {
        const data = new Data();
        data.Vehicle_Id =req.body.Vehicle_Id;
        data.Vehicle_Type = req.body.Vehicle_Type;
        data.percentCO = req.body.percentCO;
        data.Status = req.body.Status;
         data.save();

        res.send(data) 
    } catch (error) {
        res.status(500)
    }
})


app.listen(3077 , () => {
    console.log("server is running on port 3077")
})