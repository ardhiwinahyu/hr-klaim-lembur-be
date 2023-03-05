const Sequelize = require("sequelize");
const db = require("../configs/database");

const dataType = Sequelize.DataTypes;

const User = db.define(
	"user",
	{
		id: {
			type: dataType.INTEGER,
			primaryKey: true,
			allowNull: false,
		},

		id_role: {
			type: dataType.INTEGER,
			allowNull: false,
		},

		username: {
			type: dataType.STRING(45),
			allowNull: false,
		},

		password: {
			type: dataType.STRING(),
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	}
);

module.exports = User;
