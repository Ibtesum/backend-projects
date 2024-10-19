const path = require("node:path");
const fileName = path.join(__dirname, "..", "tasks.json");

const TaskStatus = {
  TODO: "todo", // unused in this project.
  IN_PROGRESS: "in-progress",
  DONE: "done",
};



module.exports = { TaskStatus, fileName };
