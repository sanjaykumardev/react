const express = require("express");
const connectDB = require("./configs/dbConnections")
const app = express();
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser')
const usercontact = require("./routes/user")
const cors = require("cors");
dotenv.config();


// port
const port = process.env.PORT || 5000
// middleware
app.use(express.json());
// Enable CORS for all origins and methods
app.use(cors({
  option: ['http://localhost:5173'],
 
}))
app.use(express);
app.use(cookieParser);

//routes
app.use("/api/user", usercontact);
app.get("/", (req,res)=>{
  res.json("<h1> Server is working<h1/>")
})


// connection to database
connectDB();


app.listen(port, () => {
  console.log(`the server is connected ${port}`)
});

