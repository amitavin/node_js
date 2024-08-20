let express = require("express");
let app = express();
let PORT = 3000;

//Q-1
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getWelcomeMessage() {
  return "We will now learn functions!";
}
//Q-2
app.get("/greet", (req, res) => {
  let userName = req.query.username;
  res.send(getGreetingMessage(userName));
});

function getGreetingMessage(userName) {
  return `Hey, ${userName}! Are you ready to learn functions with us?`;
}

//Q-3
app.get("/message", (req, res) => {
  let yearsOfExp = parseFloat(req.query.yearsOfExp);
  res.send(checkYearsOfExp(yearsOfExp));
});

function checkYearsOfExp(yearsOfExp) {
  if (yearsOfExp > 0) {
    return `You have some experience with functions. Great!`;
  } else {
    return `No worries. You will start writing functions in no time!`;
  }
}

//Q-4
app.get("/hours", (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(getTime(days, hours));
});

function getTime(days, hours) {
  let result = days * hours;
  return result.toString();
}

//Q-5
app.get("/module-completion-status", (req, res) => {
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted;
  res.send(getModuleCompletion(username, hasCompleted));
});

function getModuleCompletion(username, hasCompleted) {
  if (hasCompleted === "true") {
    return `${username} has completed the modules`;
  } else {
    return `${username} has not completed the modules`;
  }
}

//Q-6
app.get("/personalized-greeting", (req, res) => {
  let city = req.query.city;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(city, name));
});

function getPersonalizedGreeting(city, name) {
  return `Hey, ${name}! What's famous about ${city}?`;
}

//Q-7
app.get("/find-age", (req, res) => {
  let birthyear = parseFloat(req.query.birthyear);
  res.send(findAge(birthyear));
});

function findAge(birthyear) {
  let age = 2024 - birthyear;
  return age.toString();
}

//Q-8
app.get("/is-time-sufficient", (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);

  res.send(findRequiredTime(days, hours));
});

function findRequiredTime(days, hours) {
  let totalHours = days * hours;
  if (totalHours >= 30) {
    return `The time being dedicated is sufficient for learning functions`;
  } else {
    return `The time being dedicated is not sufficient for learning functions`;
  }
}

app.listen(PORT, () => {
  console.log(`App(BD1.4_HW_1) is listening on port ${PORT}`);
});
