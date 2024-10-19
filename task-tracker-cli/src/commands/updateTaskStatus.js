const { fileName } = require("../config/constants");
const { readTasks, writeInFile } = require("../utils/fileOperations");

async function updateTaskStatus(args, newStatus) {
  if (args.length === 0) {
    console.log("Error: Task ID is required");
    return;
  }
  const [id] = args;
  const taskId = Number(id);
  if (isNaN(taskId)) {
    console.log("Error: Invalid task ID");
    return;
  }
  try {
    const tasks = await readTasks(fileName);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      console.log(`Error: Task with ID ${taskId} not found`);
      return;
    }
    tasks[taskIndex].status = newStatus;
    tasks[taskIndex].updatedAt = new Date();
    await writeInFile(fileName, tasks);
    console.log(`Task ${taskId} status updated to ${newStatus}`);
  } catch (error) {
    console.error("Error updating task status:", error.message);
  }
}

module.exports = updateTaskStatus;
