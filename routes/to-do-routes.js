const express = require("express");
const ToDoController = require("./../controllers/to-do-controllers");

const router = express.Router();
const todoListController = new ToDoController();

router.get("/", todoListController.getToDoList);

router.get("/:id", todoListController.getTodoListById);

router.post("/", todoListController.createToDo);

router.put("/:id", todoListController.updateToDo);

router.delete("/:id", todoListController.deleteToDo);

module.exports = router;
