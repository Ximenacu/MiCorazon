const sequelize = require('../config/connection');

const {
  Menu
} = require('../model');

const menuData = require('./menu.json');

// Function to seed db
// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   await Menu.bulkCreate(menuData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();

Menu.bulkCreate(menuData);