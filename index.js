const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");

dotenv.config();
const app = express()

// Connect mongodb
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("db connection successful!");
})
.catch((err)=>{
    console.log(err);
})


// to read json err(undefined req.body.name) 
app.use(express.json());

app.use("/auth", authRoute);



const port = 5000;
app.listen(port || 5000, () => {
  console.log(`listening on port ${port}`)
})