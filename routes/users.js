var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// GET specific user by ID
router.get("/:id", function (req, res, next) {
  const userId = req.params.id;
  res.send(`User details for user with ID: ${userId}`);
});

// POST create a new user
router.post("/", function (req, res, next) {
  const newUser = req.body; // Assuming body-parser middleware is used
  res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

// PUT update a user by ID
router.put("/:id", function (req, res, next) {
  const userId = req.params.id;
  const updatedUser = req.body; // Assuming body-parser middleware is used
  res.send(
    `User with ID: ${userId} updated with data: ${JSON.stringify(updatedUser)}`
  );
});

// DELETE a user by ID
router.delete("/:id", function (req, res, next) {
  const userId = req.params.id;
  res.send(`User with ID: ${userId} deleted`);
});

module.exports = router;
