const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
    fullName : {type: String, required: true},
    jobTitle : []
 
    

});

const model = mongoose.model("User", mySchema);
module.exports = model;
