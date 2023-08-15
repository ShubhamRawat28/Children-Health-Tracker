const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, inputItem, selectedDate, inputValue } = req.body;
  console.log(userId);
  console.log(inputItem);
  console.log(selectedDate);
  console.log(inputValue);
  try {
    // Find the user by ID in the MongoDB database
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      var newEntry;
      if(inputItem === "sleep") {
      newEntry = {
        date: selectedDate,
        sleepTime: parseInt(inputValue),
      };
      user.sleep.push(newEntry);
    } else if(inputItem === "weight") {
      newEntry = {
        date: selectedDate,
        kgs: parseInt(inputValue),
      };
      user.weight.push(newEntry);
    } else if(inputItem === "height") {
      newEntry = {
        date: selectedDate,
        cm: parseInt(inputValue),
      };
      user.height.push(newEntry);
    } else if(inputItem === "food") {
      newEntry = {
        date: selectedDate,
        calorie: parseInt(inputValue),
      };
      user.food.push(newEntry);
    }
      console.log(newEntry);
      await user.save();
      res.json({ message: "Sleep time updated successfully", user: user });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating sleep time", error: error.message });
  }
});

module.exports = router;
