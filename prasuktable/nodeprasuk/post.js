 const mongoose = require("mongoose");
 const AutoIncrement = require("mongoose-sequence")(mongoose);
 const post_schema = mongoose.Schema({
      
    Vehicle_Id:{
        type: String,
        required:true
    },

    Vehicle_Type: {
        type: String,
        required:true
    },
    percentCO: {
        type:Number,
        required:true
    },
    Status:{
        type: String,
        required:true
    }

 })
post_schema.plugin(AutoIncrement, {inc_field:'id'});
 module.export = mongoose.model("data", post_schema);
