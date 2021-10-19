const mongoose = require("mongoose"); //importing mongoose

const ToDoModel = new mongoose.Schema({
  //using mongoose Schema to create Database data.
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  deadline: { type: String, default: Date, required: true },
  birthdate: { type: String, default: Date, required: true },
});

const ToDo = mongoose.model("todolist", ToDoModel); // sending model to Mongo Database

module.exports = ToDo; //exporting module
