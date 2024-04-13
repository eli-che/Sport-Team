const express = require('express');

const morgan = require('morgan');
const clientSession = require('client-sessions');
const helmet = require('helmet');

const {SESSION_SECRET} = require('./config');

let app = express();
const api = require('./src/api');

app.use(morgan('short'));
app.get('/', (req, res) => res.sendStatus(200));
app.get('/health', (req, res) => res.sendStatus(200));

app.use(express.json());
app.use(
  clientSession({
    cookieName: 'session',
    secret: SESSION_SECRET,
    duration: 24 * 60 * 60 * 1000
  })
);
app.use(helmet());

app.use(api);

let server;
module.exports = {
  start(port) {
    server = app.listen(port, () => {
      console.log(`App started on port ${port}`);
    });
    return app;
  },
  stop() {
    server.close();
  }
};
