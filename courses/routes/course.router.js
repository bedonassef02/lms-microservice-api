const router = require("express").Router();
const courseController = require("../controllers/course.controller");

router.post("/", courseController.create);

router.get("/", courseController.findAll);

router.get("/:id", courseController.findById);

router.patch("/:id", courseController.update);

router.delete("/:id", courseController.remove);
