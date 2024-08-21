let express = require("express");
let app = express();

app.get("/", (req, res) => {
  let welcomeNote = "You are on BD2.1_HW_2";
  res.send(welcomeNote);
});

let githubPublicData = {
  username: "ankit123",
  fullname: "Ankit Kumar",
  email: "ankit@gmail.com",
  repositories: 24,
  gist: 12,
  joinedOn: "Sep 2018",
};

//Q-1
app.get("/github-profile", (req, res) => {
  res.json(getProfileUrl(githubPublicData));
});
function getProfileUrl(githubPublicData) {
  return {
    profileUrl: "https://github.com/" + githubPublicData.username,
  };
}

//Q-2
app.get("/github-public-email", (req, res) => {
  let userEmail = getPublicEmail(githubPublicData);
  res.json({ publicEmail: userEmail });
});
function getPublicEmail(githubPublicData) {
  return githubPublicData.email;
}

//Q-3
app.get("/github-repos-count", (req, res) => {
  res.json(getReposCount(githubPublicData));
});
function getReposCount(githubPublicData) {
  return {
    reposCount: githubPublicData.repositories,
  };
}

//Q4
app.get("/github-gists-count", (req, res) => {
  res.json(getGistsCount(githubPublicData));
});
function getGistsCount(githubPublicData) {
  return { gistsCount: githubPublicData.gist };
}

//Q-5
app.get("/github-user-bio", (req, res) => {
  res.json(getUserBio(githubPublicData));
});
function getUserBio(githubPublicData) {
  return {
    fullname: githubPublicData.fullname,
    joinedOn: githubPublicData.joinedOn,
    email: githubPublicData.email,
  };
}

//Q-6
app.get("/github-repo-url", (req, res) => {
  let repoUrl = req.query.repoName;
  res.json(getRepoUrl(githubPublicData, repoUrl));
});
function getRepoUrl(githubPublicData, repoUrl) {
  return {
    repoUrl: "https://github.com/" + githubPublicData.username + "/" + repoUrl,
  };
}

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
