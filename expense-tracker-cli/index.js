#!/usr/bin/env node

const { Command } = require("commander");

const program = new Command();

async function addExpense(description, amount) {
  console.log({ description, amount });
}

async function updateExpense(id, description, amount) {
  console.log({ id, description, amount });
}

async function deleteExpense(id) {
  console.log({ id });
}

// TODO: Users can add an expense with a description and amount.
program
  .command("add")
  .description("Add expense.")
  .option("-d, --description <description>", "add description of the expense.")
  .option("-a, --amount <amount>", "add amount of the expense.", parseFloat)
  .action(async (options) => {
    const { description, amount } = options;

    if (description && amount) {
      await addExpense(description, amount);
    } else {
      console.log("Please provide description and amount with proper flags.");
    }
  });

// TODO: Users can update an expense.
program
  .command("update")
  .description("Update expense by expense id.")
  .option("--id <ID>", "provide the id that needs to be updated.", parseFloat)
  .option("-d, --description <description>", "add updated description.")
  .option("-a, --amount <amount>", "add updated amount.", parseFloat)
  .action(async (options) => {
    const { id, description, amount } = options;
    if (id && description && amount) {
      await updateExpense(id, description, amount);
    } else {
      console.log(
        "Please provide id, description and amount with proper flags"
      );
    }
  });

program
  .command("delete")
  .option(
    "--id <ID>",
    "provide the id of expense that needs to be deleted.",
    parseFloat
  )
  .action(async (option) => {
    const { id } = option;
    if (id) await deleteExpense(id);
    else
      console.log(
        "Please provide the id of the expense that need to be deleted."
      );
  });

program.parse();
