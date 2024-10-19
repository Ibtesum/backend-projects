const { fileName } = require("../config/constants");
const { readTasks, writeInFile } = require("../utils/fileOperations");
const {
  generateNewTaskId,
  generateNewTask,
} = require("../utils/taskOperations");

async function addTask(args) {
  if (args.length === 0) {
    console.log("Error: Task content is required");
    return;
  }
  const [content] = args;
  try {
    const existingTasks = await readTasks(fileName);
    const taskId = generateNewTaskId(existingTasks);
    const newTask = generateNewTask(taskId, content);
    await writeInFile(fileName, [...existingTasks, newTask]);
    console.log(`Task added successfully: ${content}`);
  } catch (error) {
    console.error("Error adding task:", error.message);
  }
}

module.exports = addTask;
