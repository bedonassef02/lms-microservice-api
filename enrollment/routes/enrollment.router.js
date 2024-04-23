const router = require("express").Router();
const enrollmentController = require("../controllers/enrollment.controller");

router.post("/", enrollmentController.enroll);

router.get("/", enrollmentController.findAll);