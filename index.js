const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const fileUpload = require('express-fileupload');
const { connectMysqlDB, MysqlPool } = require("./DBconnection/DBconnection.js");
// const connectDB = require("./DBconnection/DBconnection");


app.use(cors());
app.use(express.json());
app.use(fileUpload());

// connectDB()
connectMysqlDB()

// api routes
require("./Routes/sharedRoutes/sharedRoutes.js")(app);
require("./Routes/AdminRoutes/AdminRoute.js")(app);
const PracticeRoute = require("./Routes/PreacticeRoute/PreacticeRoute");

app.use("/practice", PracticeRoute); 

app.get("/", (req, res) => {
  console.log('Connected each Others')
  });

app.listen(port, (req, res) => {
console.log("Education Network Port Is", port);
});