# Task Tracker CLI tool from roadmap.sh

Project Link: [Task Tracker CLI](https://roadmap.sh/projects/task-tracker)

First, clone this repo. Then, navigate to the `task-tracker-cli` folder. I believe you know how to do this.

Then to install it globally, run

```bash
npm install -g
```

If you want to make a symlink and use this in any of your projects:

```bash
node link
```

Then in your desired project folder, run:

```bash
node link task-tracker-cli
```

To unlink it:

```bash
node unlink task-tracker-cli
```

After cloning the repository and installing it globally, you can run the following commands anywhere on your device.
Don't worry, I am a moderately good person, you won't get any malicious code!

```bash

# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress

```

### Sample JSON structure

```json
[
  {
    "id": 1,
    "description": "Task 1",
    "status": "todo",
    "createdAt": "2024-09-02T10:43:38.322Z",
    "updatedAt": "2024-10-19T02:38:12.026Z"
  },
  {
    "id": 3,
    "description": "Task 3",
    "status": "done",
    "createdAt": "2024-10-18T23:42:57.231Z",
    "updatedAt": "2024-10-19T01:36:20.062Z"
  }
]
```
