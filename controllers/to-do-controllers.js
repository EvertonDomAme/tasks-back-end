const mongoose = require("mongoose");

const ToDoListServices = require("../services/to-do-services");

const toDoListService = new ToDoListServices();

class ToDoController {
  getToDoList = async (req, res) => {
    const toDoList = await toDoListService.findAll();

    res.status(200).send(toDoList);
  };

  getTodoListById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send("Invalid Id");
      return;
    }

    const todo = await toDoListService.findById(id);

    if (!todo) {
      res.status(404).send("Not Found");
      return;
    }
    res.status(200).send(todo);
  };
  createToDo = async (req, res) => {
    const todo = req.body;
    const savedToDo = await toDoListService.createToDo(todo);
    res
      .status(200)
      .send({ message: `New To-Do ${savedToDo.title} successfully created` });
  };

  updateToDo = async (req, res) => {
    const id = req.params.id;
    const todo = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send("Invalid Id");
      return;
    }
    await toDoListService
      .updateToDo(id, todo)
      .then(() => {
        res
          .status(200)
          .send({ message: `To-Do ${todo.title} successfully updated` });
      })
      .catch((err) => res.status(500).send({ error: `Server error ${err}` }));
  };

  deleteToDo = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send("Invalid Id");
      return;
    }
    await toDoListService
      .deleteToDo(id)
      .then(() => {
        res.status(200).send({ message: "To-Do successfully deleted" });
      })
      .catch((err) => res.status(500).send({ error: `Server error ${err}` }));
  };
}
module.exports = ToDoController;
