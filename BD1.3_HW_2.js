let express = require("express");
let app = express();
let PORT = 3000;

app.get("/check-bmi", (req, res) => {
  let height = parseFloat(req.query.height);
  let weight = parseFloat(req.query.weight);
  let bmi = weight / (height * height);
  let result = "The Number is ";
  if (bmi < 18.5) {
    result = result + "underweight";
  } else if (bmi < 24.9) {
    result = result + "normal weight";
  } else if (bmi < 29.9) {
    result = result + "over weight";
  } else {
    result = result + "obese";
  }
  res.send(result);
});

app.get("/check-performance", (req, res) => {
  let grade = parseFloat(req.query.grade);

  let result = "Academic performance is ";
  if (grade >= 90) {
    result = result + "excellent";
  } else if (grade >= 75) {
    result = result + "good";
  } else if (grade >= 50) {
    result = result + "average";
  } else {
    result = result + "poor";
  }
  res.send(result);
});

app.get("/check-age-group", (req, res) => {
  let age = parseFloat(req.query.age);
  let result = "Age group is ";
  if (age <= 12) {
    result = result + "child";
  } else if (age <= 17) {
    result = result + "teenager";
  } else if (age <= 64) {
    result = result + "adult";
  } else {
    result = result + "senior";
  }
  res.send(result);
});

app.get("/check-loan-eligibility", (req, res) => {
  let creditScore = parseFloat(req.query.creditScore);
  let result = "Loan eligibility is ";
  if (creditScore >= 750) {
    result = result + "High";
  } else if (creditScore >= 650) {
    result = result + "medium";
  } else {
    result = result + "low";
  }
  res.send(result);
});

app.get("/check-tax-bracket", (req, res) => {
  let income = parseFloat(req.query.income);
  let result = " You fall under the ";
  if (income <= 500000) {
    result = result + "10% tax bracket";
  } else if (income <= 1000000) {
    result = result + "15% tax bracket";
  } else if (income <= 1500000) {
    result = result + "20% tax bracket";
  } else {
    result = result + "30% tax bracket";
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`App(BD1.3_HW_2) is listening on port ${PORT}`);
});
