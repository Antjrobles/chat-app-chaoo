const express = require('express');
const { createChat, findUserChats, findChat } = require("../Controllers/chatController"); //importing the controller function from chatController.js
const router = express.Router(); // Create a router

router.post("/", createChat); // Create a chat between two users
router.get("/:userId", findUserChats); // Get all chats for a user
router.get("/find/:firstId/:secondId", findChat); // Finds a chat between two users


module.exports = router; // export router to use in index.js