require("dotenv").config(); //dotenv configuration should be in line 1
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

//import routes
const authRouter = require("./routes/auth");
const passportSetup = require("../config/passport-setup");
const apiRouter = require("./routes/api");
// import { initialiseAuthentication } from "./auth";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRouter);

// app.use(passport.initialize());

//Route handlers
app.use("/auth", authRouter);
// app.use('/api', (req, res) => {
//   console.log('in api');
//   res.send('hello');
// })

// handle static files
app.use("/dist", express.static(path.join(__dirname, "../dist")));

// Production mode serves bundle/index.html
if (process.env.NODE_ENV === 'production') {
  app.get('/dist/bundle.js', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
  });

  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
  });
}

//app.use("/api", apiRouter);

// catch-all for unknown routes
app.use((req, res) => res.sendStatus(404));

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign(defaultErr, err);
  res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(
    `Server is listening on port: ${`http://localhost:${PORT}/`}...!`
  );
});
