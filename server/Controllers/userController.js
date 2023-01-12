const userModel = require('../Models/userModel'); // Import userModels.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({ _id }, jwtkey, { expiresIn: '3d' }); // 3 day token expire
};

const registerUser = async (req, res) => {
    try {
    const { name, email, password } = req.body; // Get data from body

    let user = await userModel.findOne({ email }); // Check if email already exists
     
    if (user) return res.status(400).json('Email already exists'); // If email exists, return error message.

    if (!name || !email || !password) return res.status(400 ).json('Please enter all fields'); // If any field is empty, erro msg

    if (!validator.isEmail(email)) return res.status(400).json('Please enter a valid email'); // If email is not valid, error msg

    if (!validator.isStrongPassword(password)) return res.status(400).json('Password must be a strong password...'); // If password is not valid, error msg.


    user = new userModel({ name, email, password }); // Create new user object.

    const salt = await bcrypt.genSalt(10); // Generate salt for password.
    user.password = await bcrypt.hash(user.password, salt); // Hash password.

    await  user.save() // Save user to database.

    const token = createToken(user._id); // Create token.

    res.status(200).json({_id: user._id, name, email, token}); // Return token.
    } catch (error) {
        console.log(error);
        res.status(500).json(error); // If error, return error.
    }
    };



const loginUser = async (req, res) => {
    const { email, password } = req.body; // Get data from body.

    try {
        let user = await userModel.findOne({ email }); // Check if email exists.

        if (!user) return res.status(400).json("Invalid Email or Password"); // If email does not exist, return error.
            const isValidPassword = await bcrypt.compare(password, user.password); // Check if password matches.

            if (!isValidPassword) return res.status(400).json("Invalid Email or Password"); // If password does not match, error msg.

            const token = createToken(user._id); // Create token.
        res.status(200).json({ _id: user._id, name: user.name, email, token }); // Return token.
    } catch (error) {
        console.log(error);
        res.status(500).json(error); // If error, return error.
};
};


const findUser = async (req, res) => {
    const userId = req.params.userId;      // Get user id from params.
    try {
        const user = await userModel.findById(userId) // Find user by id.
        res.status(200).json(user); // Return user.

    } catch (error) { // If error, return error.
        console.log(error);
        res.status(500).json(error);
    }
};


const getUsers = async (req, res) => {
    try {
        const users = await userModel.find() // Find all users.
        res.status(200).json(users); // Return user.

    } catch (error) { // If error, return error.
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { registerUser, loginUser, findUser, getUsers }; // Export functions.
