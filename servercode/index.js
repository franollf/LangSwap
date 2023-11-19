const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: true }));

// Authentication endpoint
app.post("/authenticate", async (req, res) => {
  try {
    const { username } = req.body;

    // Make a PUT request to the ChatEngine API
    const chatEngineResponse = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username
      },
      {
        headers: {
          "private-key": "8a71219a-2f6e-44c6-b5df-1b1f8d722dff"
        }
      }
    );

    // Send the ChatEngine API response to the client
    return res.status(chatEngineResponse.status).json(chatEngineResponse.data);
  } catch (error) {
    // Handle errors and send appropriate response
    return res.status(error.response.status).json(error.response.data);
  }
});

// Start the server on port 30001
const PORT = 30001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
