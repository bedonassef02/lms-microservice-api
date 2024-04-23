const router = require("express").Router();
const gradesController = require("../controllers/grades.controller");

router.post("/", gradesController.assign);
