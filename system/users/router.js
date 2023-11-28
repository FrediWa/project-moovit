const express = require("express");
const router = express.Router();
const userControlller = require("./userController");
const { SUCCESS, FAIL } = require("../status");
const authorize = require("../middleware/authorize");
const asyncErrorHandler = require("../utilities/asyncErrorHandler");

// Register user.
router.post(
  "/register",
  asyncErrorHandler(async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const statusObject = await userControlller.registerUser(username, password);
    res.status(statusObject.httpStatus).send({ message: statusObject.message });
  })
);

// Login user.
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const statusObject = await userControlller.login(username, password);
  res.status(statusObject.httpStatus).send({ message: statusObject.message });
});

// Helper endpoint for testing.
router.post("/verify", authorize, (req, res) => {
  res.send("verified");
});

module.exports = router;
