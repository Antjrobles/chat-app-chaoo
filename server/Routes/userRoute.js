const express = require('express'); 
const {registerUser} = require("../Controllers/userController"); //importing the controller function from userController.js

const router = express.Router(); 



router.post('/register', registerUser); //registerUser is the controller function imported from userController.js 

module.exports = router; // export router to use in index.js

