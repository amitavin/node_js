let express = require("express");
let app = express();
let PORT = 3000;

app.get("/check-number", (req, res) => {
  let number = parseFloat(req.query.number);
  if (number >= 0) {
    res.send("Number is positive");
  } else {
    res.send("Number is negative");
  }
});

app.get("/check-even-odd", (req, res) => {
  let number = parseFloat(req.query.number);
  if (number % 2 == 0) {
    res.send("Number is Even");
  } else {
    res.send("Number is Odd");
  }
});

app.get("/check-login", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn;
  if (isLoggedIn === "true") {
    res.send("User is logged in");
  } else {
    res.send("User is Not logged in");
  }
});

app.get("/check-discount", (req, res) => {
  let age = parseFloat(req.query.age);
  if (age > 65) {
    res.send("User is eligible for a discount");
  } else {
    res.send("User is Not eligible for a discount");
  }
});

app.get("/check-number-type", (req, res) => {
  let number = parseFloat(req.query.number);
  if (number == 0) {
    res.send("Number is zero");
  } else if (number >= 0) {
    res.send("Number is Positive");
  } else {
    res.send("Number is Negative");
  }
});

app.get("/check-temperature", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  if (temperature < 15) {
    res.send("Temperature is Cold");
  } else if (temperature > 15 && temperature < 25) {
    res.send("Temperature is Warm");
  } else {
    res.send("Temperature is Hot");
  }
});

app.get("/check-activity-level", (req, res) => {
  let steps = parseFloat(req.query.steps);
  if (steps < 5000) {
    res.send("Activity level is low");
  } else if (steps > 5000 && steps < 10000) {
    res.send("Activity level is moderate");
  } else {
    res.send("Activity level is high");
  }
});

app.get("/check-engagement", (req, res) => {
  let likes = parseFloat(req.query.likes);
  if (likes < 100) {
    res.send("Engagement level is low");
  } else if (likes > 100 && likes < 500) {
    res.send("Engagement level is medium");
  } else {
    res.send("Activity level is high");
  }
});

//check-engagement

app.listen(PORT, () => {
  console.log(`App(BD1.3_CW) is listening on port ${PORT}`);
});
