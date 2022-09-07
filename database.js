// yessi
// yessi123
const mongoose = require('mongoose')

const connectDB = async () => {
    try {

        
await mongoose.connect('mongodb+srv://yessi:yessi123@cluster0.1hedi.mongodb.net/empleado?retryWrites=true&w=majority')

console.log('DB IS CONNECTED...')
        
    } catch (error) {
        console.log('THE ERROR IS', error)
    }
}


module.exports = {
    connectDB
}