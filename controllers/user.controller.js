const User_role_menu = require("../models/user_role_menu.model");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const getListKaryawan = async function (req, res, next) {
	try {
		const users = await User.findAll({
			attributes: ["id", "id_role", "username"],
		});
		res.json(users);
	} catch (error) {
		console.log(error);
	}
};

const loginController = async function (req, res, next) {
	const username = req.body.username;
	const password = req.body.password;

	try {
		const user = await User.findAll({
			attributes: ["id", "id_role", "username"],
			where: {
				username: username,
				password: password,
			},
		});

		if (!user) {
			res.json({ message: "user tidak ditemukan" });
		}

		const id_role = user[0].id_role;
		const id = user[0].id;
		const userName = user[0].username;

		const menu = await User_role_menu.findAll({
			where: {
				roleId: id_role,
			},
		});

		const listMenu = {};

		const sentUserData = {
			id,
			id_role,
			userName,

			listMenu,
		};

		menu.forEach((item) => {
			listMenu[item.menuId] = true;
		});

		const accessToken = jwt.sign({ id_role, id, userName }, process.env.ACCESS_TOKEN_KEY, { expiresIn: "5m" });
		//const refreshToken = jwt.sign({ id_role, id, userName }, process.env.REFRESH_TOKEN_KEY, { expiresIn: "7d" });

		// res.cookie("refreshToken", refreshToken, {
		// 	httpOnly: true,
		// 	maxAge: 24 * 60 * 60 * 1000,
		// });
		res.json({ ...sentUserData, accessToken: accessToken });
	} catch (error) {
		console.log(error);
		res.status(401).json({ message: "Username atau Password salah" });
	}
};

module.exports = { getListKaryawan, loginController };
