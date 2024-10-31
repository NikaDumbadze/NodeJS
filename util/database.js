// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'node',
//   password: 'A password is required'
// })

// module.exports = pool.promise();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node', 'root', 'aL5fr92G', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;