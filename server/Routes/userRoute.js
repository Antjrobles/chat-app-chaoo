const express = require('express'); 
const { registerUser, loginUser, findUser, getUsers } = require("../Controllers/userController"); //importing the controller function from userController.j

const router = express.Router(); 



router.post('/register', registerUser); //registerUser is the controller function imported from userController.js 
router.post('/login', loginUser); //loginUser is the controller function imported from userController.js
router.get('/find/:userId', findUser); //findUser is the controller function imported from userController.js 
router.get('/', getUsers); //getUsers is the controller function imported from userController.js


module.exports = router; // export router to use in index.js

