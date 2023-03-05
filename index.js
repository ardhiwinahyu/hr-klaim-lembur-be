const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./configs/database");
const Role = require("./models/role.model");
const User = require("./models/user.model");
const Menu = require("./models/menu.model");
const User_role_menu = require("./models/user_role_menu.model");
const app = express();

const userRoute = require("./routes/user.route");

app.use(cookieParser());

app.use(cors());
app.use(express.json());

(async () => {
	try {
		await db.authenticate();
		console.log("Database connected");
		await Role.sync();
		await User.sync();
		await Menu.sync();
		await User_role_menu.sync();

		// await User_role_menu.create({
		// 	userId: 3,
		// 	roleId: 2,
		// 	menuId: "list_karyawan",
		// });
	} catch (error) {
		console.log(error);
	}
})();

app.use("/", userRoute);

app.listen(5000, () => {
	console.log("Server is on");
});
