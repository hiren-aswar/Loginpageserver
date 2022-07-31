var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/db");
var user = require("./Schema.js");

app.post("/insert", async (req, res) => {
  const data = await user.find({ password: req.body.password });
  if (data.length === 0) {
    try {
      const data = new user({
        name: req.body.name,
        password: req.body.password,
      });
      const result = await data.save();
      res.send(false);
    } catch (e) {
      res.send(true);
    }
  } else {
    res.send(true);
  }
});
app.post("/find", async (req, res) => {
  const data = await user.find({ password: req.body.password });
  if (data.length === 0) {
    res.send(true);
  } else {
    res.send(false);
  }
});


app.listen(3001, () => {
  console.log("server stsrted 3001");
});
