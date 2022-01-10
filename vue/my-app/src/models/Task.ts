//todo: comment entire class

export class Task {

    Id: string = "123";
    Name: string;
    Complete: boolean = false;

    constructor(taskName: string) {
        this.Name = taskName;
    }

    static sampleTaskList: Task[] = [
        new Task("Task 1"),
        new Task("Task 2"),
    ];
}