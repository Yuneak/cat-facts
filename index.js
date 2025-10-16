const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;



app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    const catFact = response.data.fact;

    
    const result = {
      status: "success",
      user: {
        email: "ezerichardugo@gmail.com", 
        name: "Richard Eze", //
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);


    const fallback = {
      status: "success",
      user: {
        email: "ezerichardugo@gmail.com",
        name: "Richard Eze",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Cats are mysterious creatures, but we couldn’t fetch a fact right now 🐱",
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(fallback);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
