const Sequelize = require("sequelize");
const User = require("./user.model");
const db = require("../configs/database");

const dataType = Sequelize.DataTypes;

const Role = db.define(
	"role",
	{
		id: {
			type: dataType.INTEGER,
			primaryKey: true,
			allowNull: false,
		},

		role: {
			type: dataType.STRING(45),
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	}
);

// Role.hasMany(User, {
// 	foreignKey: "id_role",
// });
// User.belongsTo(Role);

module.exports = Role;
