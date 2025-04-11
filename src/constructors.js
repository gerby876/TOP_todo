class project { constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tasks = ["test", "test2"]
    this.id = crypto.randomUUID();
}};

export {project}

