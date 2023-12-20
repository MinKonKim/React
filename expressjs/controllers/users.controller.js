const model = require("../models/users.model");

function getUsers(req, res) {
  res.send(Users);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = model[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404).end();
  }
}

function postUser(req, res) {
  if (!req.body.name) {
    res.status(400).json({
      error: "Missing user name",
    });
  }

  const newUser = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newUser);
  res.json(newUser);
}

module.exports = {
  getUser,
  getUsers,
  postUser,
};
