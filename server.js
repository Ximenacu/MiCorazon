const express = require('express');
const path = require('path');
//Sequelize
const sequelize = require('./config/connection');

//Model import  
const Menu = require('./model');

const app = express();
const PORT = process.env.PORT || 3001;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This express app is going to use the public folder in order to serve static files. 
// app.use(express.static('public'));

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
  })
  .catch((error) => console.log('Error with sequelize link:', error));
  