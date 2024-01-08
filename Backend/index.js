const express = require("express");
const connectDB = require("./configs/dbConnections")
const app = express();
const dotenv  = require("dotenv")
const usercontact = require("./routes/user")
const cors  = require("cors");
dotenv.config();

const port =  process.env.PORT || 5000
// middleware
app.use(express.json());
app.use(cors({
  option:['http://localhost:5173']
}))
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/user" ,usercontact);

// Enable CORS for all origins and methods

// connection to database
connectDB();


// app.get("/",cors(),(req,res)=>{

// })


app.listen(port, ()=>{
  console.log(`the server is connected ${port}`)
});

