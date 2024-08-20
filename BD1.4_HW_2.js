let express = require("express");
const { parse } = require("path");
let app = express();
let PORT = 3000;

//Q-1
app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
});

function generateProfileUrl(username) {
  return `https://github.com/${username}`;
}
//Q-2
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});

function generateCertificate(firstName, lastName, courseName) {
  return `This certification is awarded to ${firstName}  ${lastName} for completing the course ${courseName}`;
}

//Q-3
app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  res.send(calculateGrade(maths, science, english));
});

function calculateGrade(maths, science, english) {
  let gradeInPercentage = parseInt(((maths + science + english) / 300) * 100);
  return gradeInPercentage.toString() + "%";
}

//Q-4
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  res.send(splitBill(billAmount, numberOfFriends));
});

function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends;
  return `Result: Each friend owes Rs. ${splitAmount.toString()} against the bill`;
}

//Q-5
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage));
});

function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = hourlyWage * totalHours;
  return `Result: Your monthly salary is ₹${monthlySalary.toString()}`;
}

app.listen(PORT, () => {
  console.log(`App(BD1.4_HW_2) is listening on port ${PORT}`);
});
