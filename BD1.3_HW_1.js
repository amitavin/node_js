let express = require("express");
let app = express();
let PORT = 3000;

app.get("/check-whole-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "The Number is ";
  if (number >= 0) {
    result = result + "whole number";
  } else {
    result = result + "Not whole number";
  }
  res.send(result);
});

app.get("/check-equal", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  let result = "The Number is ";
  if (num1 === num2) {
    result = result + "Equal";
  } else {
    result = result + " Not Equal";
  }
  res.send(result);
});

app.get("/check-active", (req, res) => {
  let isActive = req.query.isActive;
  let result = "User is ";
  if (isActive === "true") {
    result = result + "Active";
  } else {
    result = result + "Not Active";
  }
  res.send(result);
});

app.get("/check-discount", (req, res) => {
  let cost = parseFloat(req.query.cost);
  let result = "";
  if (cost > 1000) {
    result = "User is eligible for a discount";
  } else {
    result = "User is Not eligible for a discount";
  }
  res.send(result);
});

app.get("/check-experience", (req, res) => {
  let workExperience = parseFloat(req.query.workExperience);
  let result = "Person is ";
  if (workExperience > 0) {
    result = result + "Experienced";
  } else if (workExperience < 0) {
    result = result + "non-working";
  } else {
    result = result + "fresher";
  }
  res.send(result);
});

app.get("/check-result", (req, res) => {
  let result = parseFloat(req.query.result);
  let grade = "The grade is ";
  if (result > 80) {
    grade = grade + "A";
  } else if (result < 80 && result > 50) {
    grade = grade + "B";
  } else {
    grade = "Fail";
  }
  res.send(grade);
});

app.get("/check-attendance", (req, res) => {
  let attendance = parseFloat(req.query.attendance);
  let result = "The attendance is ";
  if (attendance < 50) {
    result = result + "low";
  } else if (attendance > 50 && attendance < 90) {
    result = result + "moderate";
  } else {
    result = result + "high";
  }
  res.send(result);
});

app.get("/check-rating", (req, res) => {
  let stars = parseFloat(req.query.stars);
  let result = "Restaurant rating is ";
  if (stars < 3) {
    result = result + "low";
  } else if (stars <= 4) {
    result = result + "moderate";
  } else {
    result = result + "high";
  }
  res.send(result);
});

//check-engagement

app.listen(PORT, () => {
  console.log(`App(BD1.3_HW_1) is listening on port ${PORT}`);
});
