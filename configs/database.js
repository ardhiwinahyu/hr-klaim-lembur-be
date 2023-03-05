const Sequelize = require("sequelize");

const db = new Sequelize("hr_klaim", "root", "root", {
	host: "localhost",
	dialect: "mysql",
});
module.exports = db;
