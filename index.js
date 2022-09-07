const express = require('express')
require('dotenv').config()
const {connectDB  }= require('./database')
const cors = require('cors')


connectDB();

const app = express();


// CORS
app.use(cors())



//MIDELWARE DE lectura y parseo del body
app.use(express.json());


// EVENTOS DEL CRUD
app.use('/api/empleados', require('./routes/empleados'));

// SERVIDOR
app.listen(process.env.PORT || 4001, ()=> {
    console.log(`SERVIDOR EN PUERTO ${ process.env.PORT } 0 4001`)
})
