abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: string[] = [];
    addTask(task: string): void {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        }
    }
    listTasks(): string[] {
        return this.tasks;
    }
}

class DailyTasks extends TaskManager {
    private tasks: string[] = [];
    addTask(task: string): void {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        }
    }
    listTasks(): string[] {
        return this.tasks;
    }
}

const project = new Project();
project.addTask('aprender java');
project.addTask('aprender spring boot');
project.addTask('terminar o trabalho');
console.log(project.listTasks());

const dailyTasks = new DailyTasks();
dailyTasks.addTask('fazer trilha da faculade');
dailyTasks.addTask('estudar');
dailyTasks.addTask('trabalhar');
console.log(dailyTasks.listTasks());