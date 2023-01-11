const mongoose = require('mongoose'); // Import Mongoose Package 

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minLenght: 3, maxLenght: 50}, // Create a name attribute that must be a strin
    email: {type: String, required: true, minLenght: 5, maxLenght: 255, unique: true}, // Create an email attribute that must be a string
    password: {type: String, required: true, minLenght: 5, maxLenght: 1024}, // Create a password attribute that must be a string 
}, {
    timestamps: true // Create a timestamp attribute 
}
); 



const userModel = mongoose.model('User', userSchema); // Create a model using the schema


module.exports = userModel; // Export the model

