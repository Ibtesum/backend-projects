const { fileName } = require("../config/constants");
const { readTasks, writeInFile } = require("../utils/fileOperations");



async function updateTask(args) {
  if (args.length < 2) {
    console.log("Error: Task ID and new content are required");
    return;
  }
  const [id, ...contentParts] = args;
  const content = contentParts.join(" ");
  const updateId = Number(id);
  if (isNaN(updateId)) {
    console.log("Error: Invalid task ID");
    return;
  }
  try {
    const allTasks = await readTasks(fileName);
    const taskIndex = allTasks.findIndex((task) => task.id === updateId);
    if (taskIndex === -1) {
      console.log(`Error: Task with ID ${updateId} not found`);
      return;
    }
    allTasks[taskIndex].description = content;
    allTasks[taskIndex].updatedAt = new Date();
    await writeInFile(fileName, allTasks);
    console.log(`Task ${updateId} updated successfully`);
  } catch (error) {
    console.error("Error updating task:", error.message);
  }
}

module.exports = updateTask;
