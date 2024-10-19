const { fileName } = require("../config/constants");
const { readTasks, writeInFile } = require("../utils/fileOperations");



async function deleteTask(args) {
  if (args.length === 0) {
    console.log("Error: Task ID is required");
    return;
  }
  const [id] = args;
  const deleteId = Number(id);
  if (isNaN(deleteId)) {
    console.log("Error: Invalid task ID");
    return;
  }
  try {
    const tasks = await readTasks(fileName);
    const tasksAfterDeleting = tasks.filter((task) => task.id !== deleteId);
    if (tasks.length === tasksAfterDeleting.length) {
      console.log(`Error: Task with ID ${deleteId} not found`);
      return;
    }
    await writeInFile(fileName, tasksAfterDeleting);
    console.log(`Task ${deleteId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting task:", error.message);
  }
}

module.exports = deleteTask;
