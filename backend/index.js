const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("homepage");
});
app.post("/login", (req, res) => {
  const name = req.body.name;
  const pass = req.body.password;
  //   console.log(name + "  " + pass);
  res.send(`${req.body}`);
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
