const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/users.controller");

usersRouter.get("/users", usersController.getUsers);
usersRouter.get("/users/:userId", usersController.getUser);
usersRouter.post("/users", usersController.postUser);

module.exports = usersRouter;
