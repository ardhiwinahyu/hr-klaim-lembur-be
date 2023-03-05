const Sequelize = require("sequelize");
const db = require("../configs/database");

const dataType = Sequelize.DataTypes;

const Menu = db.define(
	"menu",
	{
		id: {
			type: dataType.STRING,
			primaryKey: true,
			allowNull: false,
		},

		menu: {
			type: dataType.STRING(45),
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	}
);

module.exports = Menu;
