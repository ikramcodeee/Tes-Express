var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// Set the port from the environment variable or set it to 3000
var port = process.env.PORT || 3000;

// Set the views folder and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Add middleware to log requests
app.use(logger("dev"));

// Add middleware to parse JSON and URL encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add middleware to parse cookies
app.use(cookieParser());

// Add middleware to serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Add routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(`Requested URL: ${req.originalUrl}`);
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

module.exports = app;
