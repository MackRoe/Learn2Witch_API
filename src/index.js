const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const util = require('util');

require('dotenv').config();

const app = require('./config/express');
const router = require('./controllers/index.js');

mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = process.env.MONGODB_URI;
mongoose.connect(
  mongoUri,
  { server: { socketOptions: { keepAlive: 1 } } }
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// # TODO: Any additional config changes belong here.

const checkAuth = (req, res, next) => {
    console.log("Checking Auth");
    if (typeof req.headers.jwttoken === "undefined" || req.headers.jwttoken === null) {
        req.user = null;
        next();
    } else {
        const token = req.headers.jwttoken;
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log('Auth Error: Invalid signature')
                req.user = null;
            } else {
                req.user = decodedToken;
            }
            next();
        })
    }
};

app.use(checkAuth);

// Routes
app.use(router);

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(process.env.PORT, () => {
    console.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
  });
}

module.exports = app;
