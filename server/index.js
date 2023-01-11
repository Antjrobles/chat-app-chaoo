const express = require('express'); // Import express
const cors = require('cors'); // CORS middleware 
const app = express(); // Create express app instance
const mongoose = require('mongoose'); // Import mongoose 
const userRoute = require('./Routes/userRoute.js'); // Import user router



app.use(express.json()); // Parse JSON bodies 
app.use(cors()); // Use CORS middleware 
app.use('/api/users', userRoute); // Use user router 
require('dotenv').config(); // Import dotenv 



// CRUD operations for the database 
app.get("/", (req, res) => {
    res.send("Hello and welcome to my chat APP API");
}); // GET request to the root route


const port = process.env.PORT || 3000; // Port to listen on 
const uri = process.env.ATLAS_URI // MongoDB Atlas URI 


app.listen(port, (req, res) => {
   console.log(`Server running on port ${port}`); // Log server start 
});



{/* CONNECT TO MONGODB */}

mongoose.connect(uri, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then(() => console.log("MongoDB connection established")).catch((error) => console.log("MongoDB connection failed"));  // Connect to MongoDB 



