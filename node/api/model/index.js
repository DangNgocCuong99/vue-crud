const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
        name:{
        type:String
    },
})
const itemModel = mongoose.model('b3',itemSchema)
module.exports = itemModel