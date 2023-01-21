const express = require('express');
const { createMessage, getMessages } = require("../Controllers/messageController");

const router = express.Router(); // Create a router

router.post("/", createMessage); // Create a chat between two users
router.get("/:chatId", getMessages); // Get all chats for a user



module.exports = router; // export router to use in index.js