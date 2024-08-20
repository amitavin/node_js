let express = require("express");
let app = express();
let PORT = 3000;

app.get("/total-distance", (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let total = distance1 + distance2;
  res.send(total.toString());
});

app.get("/total-time", (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let total = time1 + time2 + time3;
  res.send(total.toString());
});

app.get("/average-speed", (req, res) => {
  let totalTime = parseFloat(req.query.totalTime);
  let totalDistance = parseFloat(req.query.totalDistance);

  let avgSpeed = totalDistance / totalTime;
  res.send(avgSpeed.toString());
});

app.get("/eta", (req, res) => {
  let speed = parseFloat(req.query.speed);
  let distance = parseFloat(req.query.distance);

  let eta = distance / speed;
  res.send(eta.toString());
});

app.get("/total-calories", (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  let totalCalories = (duration1 + duration2) * caloriesPerMinute;
  res.send(totalCalories.toString());
});

app.get("/interest-earned", (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);

  let earning = (principal * rate * time) / 100;
  res.send(earning.toString());
});

app.listen(PORT, () => {
  console.log(`App(BD1.2-CW) is listening on port ${PORT}`);
});
