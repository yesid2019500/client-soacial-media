
const { Schema, model } = require('mongoose')

// nutros squema
const EmpleadoSchema =  Schema({
   name:{type:String, required:true},
   // apellido2:{type:String, required:true},
   profile:{type:String, required:true},
   likes:{type:Number, required:true },
   date:{type:Date},
   // pais: {type:String, required:true},
   // cedula: {type:Number, required:true, unique:true},
   comments: {type:String, required:true},
   picture_commet: {type:String, required:true},
   // idempleado: {type:String, required:true},

   // email: {} , 
   tags: [String]  

})




module.exports = model('Empleado', EmpleadoSchema)