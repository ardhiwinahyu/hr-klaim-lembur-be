const express = require("express");
const router = express.Router();
const { getListKaryawan, loginController } = require("../controllers/user.controller");

router.post("/login", loginController);
router.get("/list_karyawan", getListKaryawan);

module.exports = router;
