const express = require('express');
const path = require('path');
const api = require('./routes/api');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/api', api);

// Production mode serves bundle/index.html
if (process.env.NODE_ENV === 'production') {
  app.get('/dist/bundle.js', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
  });

  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
  });
}

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
    `Server is listening on port: ${`http://localhost:${PORT}/`}...!!!!!! `
  );
});
