const express = require('express');
const dotenv = require("dotenv");

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const masterRoutes = require("./src/routes/v1/master")
const apiMiddleware = require("./src/middleware/apiAuth");
const adminMiddleware = require("./src/middleware/adminAuth")
const errorHandler = require("./src/middleware/errorHandler")

dotenv.config();
require('./src/config/sequelize');

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', masterRoutes)
app.use(errorHandler)

app.get("/", (req, res) => {
    res.json({
        message: "The server has started."
    });
});

module.exports = app;