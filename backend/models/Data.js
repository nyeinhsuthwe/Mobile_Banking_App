const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DataSchema = new Schema({

    description  : {
        type : String,
        required : true,
    },
    price  : {
        type : String,
        required : true,
    },
    date  : {
        type : String,
        required : true,
    },
}, { timestamps : true});

module.exports = mongoose.model("Data",DataSchema);