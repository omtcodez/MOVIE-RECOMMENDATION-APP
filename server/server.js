const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbconfig.js');
app.use(express.json());
const usersRoute = require('./routes/usersRoute');
app.use('/api/users', usersRoute);


const port = process.env.PORT || 1234;

app.listen(port, () => console.log(`Node JS Server started on port ${port}` ));
 