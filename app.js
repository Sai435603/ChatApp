const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/",(req,res)=>{
  res.send("Server started");
});
// Set EJS as view engine
app.set("view engine", "ejs");

app.listen(PORT, () => {console.log(`Server running at http://localhost:${PORT}`);});