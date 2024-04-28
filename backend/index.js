const dotenv = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// mongodb connection
// console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

// schema
const userSchema = mongoose.Schema({
 email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

// userModel
const userModel = mongoose.model("user", userSchema);

// api
app.get("/", (req, res) => {
  res.send("Server is running");
});

// signup
app.post("/signup", async (req, res) => {
  // console.log(req.body);
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
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// api login
app.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  try {
    const result = await userModel.findOne({ email: email, password: password }).exec();
    if (result) {

      const dataSend = {
        _id: result._id,
        email: result.email,
        image: result.image,

      };
      // console.log(dataSend);


      res.send({message: "Login is successful", alert: true, data: dataSend });
    } else {
      res.send({ message: "Email or Password  error", alert: false, });
    }
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// add tours

const addTours = mongoose.Schema({
  name: String,
  city: String,
  address:String,
  distance:String,
  price: String,
  maxGroupSize: String,
  desc: String,
  image:String

});
const addTourModel = mongoose.model("addTour", addTours);

// add tours in db

app.post("/uploadtour",async(req,res)=>{
  // console.log(req.body);
const data =await addTourModel(req.body)
const datasave =  await data.save()
  res.send({message : "Tour uploaded Successfully!"})

})
 
// 
app.get("/tour",async(req,res)=>{
  const data =await addTourModel.find({})
res.send(JSON.stringify(data))
})













app.listen(PORT, () => {
  console.log("Server is running at port: " + PORT);
});
