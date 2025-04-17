class project { constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tasks = []
    this.id = crypto.randomUUID();
}};

class task { constructor(description, dueDate, priority, complete) {
    this.taskDes = description;
    this.taskDue = dueDate;
    this.taskPrio = priority;
    this.complete = complete;
    this.taskId = crypto.randomUUID();
}};

export {project, task}

