const generateNewTask = (id, description) => {
  return {
    id: id,
    description: description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

function generateNewTaskId(tasks) {
  return tasks[tasks.length - 1]?.id + 1;
}

module.exports = {
  generateNewTask,
  generateNewTaskId,
};
