const express = require('express'); // Import express
const cors = require('cors'); // CORS middleware 
const app = express(); // Create express app instance
const mongoose = require('mongoose'); // Import mongoose 
const userRoute = require('./Routes/userRoute.js'); // Import user router
const chatRoute = require('./Routes/chatRoute.js'); // Import chat router
const messageRoute = require('./Routes/messageRoute.js'); // Import chat router



app.use(express.json()); // Parse JSON bodies 
app.use(cors()); // Use CORS middleware 
app.use('/api/users', userRoute); // Use user router 
app.use('/api/chats', chatRoute); // Use chat router
app.use('/api/messages', messageRoute); // Use chat router
require('dotenv').config(); // Import dotenv 



// CRUD operations for the database 
app.get("/", (req, res) => {
    res.send("Hello and welcome to my chat APP API");
}); // GET request to the root route

const serverIP = "192.168.0.52"  // Server IP address
const port = process.env.PORT || 3000; // Port to listen on 
const uri = process.env.ATLAS_URI // MongoDB Atlas URI 


app.listen(port, serverIP, (req, res) => {
   console.log(`Server running on port ${port}`); 
   console.log("Server is running on IP http://192.168.0.52:3000"); 
});



{/* CONNECT TO MONGODB */}

mongoose.connect(uri, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then(() => console.log("MongoDB connection established")).catch((error) => console.log("MongoDB connection failed"));  // Connect to MongoDB 




