const ToDo = require("../models/to-do");

class ToDoService {
  findAll = async () => {
    return await ToDo.find();
  };

  findById = async (id) => {
    return await ToDo.findById(id);
  };
  createToDo = async (todo) => {
    return await ToDo.create(todo);
  };
  updateToDo = async (id, todo) => {
    return await ToDo.updateOne({ _id: id }, todo);
  };
  deleteToDo = async (id) => {
    return await ToDo.deleteOne({ _id: id });
  };
}
module.exports = ToDoService;
