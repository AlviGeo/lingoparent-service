const express = require('express');
const dotenv = require("dotenv");

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const masterRoutes = require("./src/routes/v1/master")
const publicRoutes = require("./src/routes/v1/api")
const apiMiddleware = require("./src/middleware/apiAuth");
const adminMiddleware = require("./src/middleware/adminAuth")
const errorHandler = require("./src/middleware/errorHandler")

dotenv.config();
require('./src/config/sequelize');

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);


app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', publicRoutes)
app.use('/api/v1', apiMiddleware, adminMiddleware, masterRoutes)
app.use(errorHandler)

app.listen(3000, function() {
   app.get("/", (req, res) => {
    res.json({ message: "The server has started." });
});
})



module.exports = app;