const { fileName } = require("../config/constants");
const { readTasks } = require("../utils/fileOperations");

async function getList(args) {
  const [status] = args;
  try {
    const tasks = await readTasks(fileName);
    const filteredTasks = status
      ? tasks.filter((task) => task.status === status)
      : tasks;
    console.log("Tasks:", filteredTasks);
  } catch (error) {
    console.error("Error getting task list:", error.message);
  }
}

module.exports = getList;
