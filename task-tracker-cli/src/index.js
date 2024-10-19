#!/usr/bin/env node

const addTask = require("./commands/addTask");
const updateTask = require("./commands/updateTask");
const deleteTask = require("./commands/deleteTask");
const getList = require("./commands/listTasks");
const updateTaskStatus = require("./commands/updateTaskStatus");
const { TaskStatus } = require("./config/constants");

console.log("TASK TRACKER CLI");

const commands = {
  add: addTask,
  update: updateTask,
  delete: deleteTask,
  list: getList,
  "mark-done": (args) => updateTaskStatus(args, TaskStatus.DONE),
  "mark-in-progress": (args) => updateTaskStatus(args, TaskStatus.IN_PROGRESS),
};

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (commands[command]) {
    await commands[command](args);
  } else {
    console.log("Error: Invalid command");
    console.log("Available commands: " + Object.keys(commands).join(", "));
  }
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error.message);
  process.exitCode(1);
});
