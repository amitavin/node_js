let express = require("express");
let app = express();

app.get("/index", (req,res) => {
  //req=req.query.name.toUpperCase();
  let welcomeNote = "You are on the index page";
  res.send(welcomeNote);
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
