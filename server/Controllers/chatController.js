const chatModel = require('../Models/chatModel');



// Create a chat between two users
const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;    // Get the two users from the request body

  try {
    const chat = await chatModel.findOne({    // Find a chat with the two users
      members: { $all: [firstId, secondId] }
    })

    if (chat) return res.status(200).json(chat); // If the chat exists, return it.

    const newChat = chatModel({    // If the chat does not exist, create it.
      members: [firstId, secondId]
    })

    const response = await newChat.save()

    res.status(200).json(response)   // Return the new chat.


  } catch (error){
  console.log(error)
  res.status(500).json(error)
  }
};

// Get all chats for a user
const findUserChats = async (req, res) => {
  const { userId } = req.params.userId;    // Get the user id from the request params

  try {
    const chats = await chatModel.find({    // Find all chats with the user
      members: { $in: [userId] }
    })

    res.status(200).json(chats)   // Return the chats.

  } catch (error){
  console.log(error) 
  res.status(500).json(error)
  }
};

// Finds a chat between two users
const findChat = async (req, res) => {
  const { firstId, secondId } = req.params;    // Get the user id from the request params

  try {
    const chats = await chatModel.find({    // Find all chats with the user
      members: { $all: [firstId, secondId] },  // Find a chat with the two users
    })

    res.status(200).json(chats)   // Return the chats.

  } catch (error){
  console.log(error)
  res.status(500).json(error)
}
};

module.exports = {createChat, findUserChats, findChat};
