// Import required modules
const dotenv = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Set the port
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to Journey Junction DB & at port ${PORT}`))
  .catch((err) => console.log(err));

// Define user schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});
const userModel = mongoose.model("user", userSchema);

// Define tour schema
const addToursSchema = mongoose.Schema({
  name: String,
  city: String,
  address: String,
  distance: String,
  price: String,
  maxGroupSize: String,
  desc: String,
  image: String,
});
const addTourModel = mongoose.model("addTour", addToursSchema);

// API routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Signup route
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email }).exec();
    if (existingUser) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await userModel.findOne({ email: email, password: password }).exec();
    if (result) {
      const dataSend = {
        _id: result._id,
        email: result.email,
        image: result.image,
      };
      res.send({ message: "Login is successful", alert: true, data: dataSend });
    } else {
      res.send({ message: "Email or Password error", alert: false });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Upload tour route
app.post("/uploadtour", async (req, res) => {
  const data = new addTourModel(req.body);
  try {
    const savedData = await data.save();
    res.send({ message: "Tour uploaded Successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Retrieve all tours route
app.get("/tour", async (req, res) => {
  try {
    const data = await addTourModel.find({});
    res.send(JSON.stringify(data));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  // console.log("Server is running at port: " + PORT);
});
