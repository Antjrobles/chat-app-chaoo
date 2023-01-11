const userModels = require('../Models/userModel'); // Import userModels.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRETE_KEY;

    return jwt.sign({ _id }, jwtkey, { expiresIn: '3d' }) // 3 day token expire
};

const registerUser = async (req, res) => {
    try {
    const { name, email, password } = req.body // Get data from body

    let user = await userModel.findOne({ email }); // Check if email already exists
     
    if (user) return res.status(400).json({ message: 'Email already exists' }); // If email exists, return error message.

    if (!name || !email || !password) return res.status(400 ).json({ message: 'Please enter all fields' }); // If any field is empty, erro msg

    if (!validator.isEmail(email)) return res.status(400).json({ message: 'Please enter a valid email' }); // If email is not valid, error msg

    if (!validator.isStrongPassword(password)) return res.status(400).json({ message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character' }); // If password is not valid, error msg.


    user = new userModel({ name, email, password }); // Create new user object.

    const salt = await bcrypt.genSalt(10); // Generate salt for password.
    user.password = await bcrypt.hash(user.password, salt); // Hash password.

    await  user.save() // Save user to database.

    const token = createToken(user._id); // Create token.

    rest.status(200).json({_id: user._id, name, email, token}); // Return token.
    } catch(error){
        console.log(error)
        res.status(500).json(error); // If error, return error.
    }
    };


module.exports = { registerUser }; // Export registerUser function to be used in other files. 

