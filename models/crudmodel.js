const mongoose = require("mongoose")
const crudSchema = mongoose.Schema({
    songname :{
        type:String,
        required :true
    },
    artist:{
        type:String,
        default:"i dont know"
    }
    

})

module.exports=mongoose.model('crud',crudSchema)