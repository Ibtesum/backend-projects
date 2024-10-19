const fs = require("node:fs/promises");

const readTasks = async (fileName) => {
  try {
    await fs.access(fileName);
  } catch (error) {
    await fs.writeFile(fileName, JSON.stringify([]));
  }

  try {
    const existingContent = await fs.readFile(fileName, "utf-8");
    return JSON.parse(existingContent);
  } catch (error) {
    console.log("Couldn't read the tasks!");
  }
};

async function writeInFile(fileName, content) {
  await fs.writeFile(fileName, JSON.stringify(content));
}

module.exports = {
  readTasks,
  writeInFile,
};
