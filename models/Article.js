const mongoose = require('mongoose')
const artiSchema = mongoose.Schema({
    title:{type:String,required:true},
    content: { type: String, required: true },
    userId:{type:Number,required:true}
})


module.exports = mongoose.model('Arti', artiSchema)