const Sequelize = require("sequelize");
const db = require("../configs/database");

const Role = require("./role.model");
const User = require("./user.model");
const Menu = require("./menu.model");

const dataType = Sequelize.DataTypes;

const User_role_menu = db.define(
	"user_role_menu",
	{
		userId: {
			type: dataType.INTEGER,
			references: {
				model: User,
				key: "id",
			},
		},

		roleId: {
			type: dataType.INTEGER,
			references: {
				model: Role,
				key: "id",
			},
		},

		menuId: {
			type: dataType.STRING,
			references: {
				model: Menu,
				key: "id",
			},
		},
	},
	{
		freezeTableName: true,
	}
);

module.exports = User_role_menu;
