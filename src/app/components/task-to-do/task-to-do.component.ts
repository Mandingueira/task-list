import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {Task} from '../../model/task';

@Component({
  selector: 'app-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.scss']
})
export class TaskToDoComponent implements OnInit {

    taskList: Array<Task> = [];

    constructor(private taskService: TasksService) {
        this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
            this.taskList = tasks.filter(t => t.isDone === false);
        });
    }

    ngOnInit() {
    }

    remove(task: Task) {
        this.taskService.remove(task);
    }

    done(task: Task) {
        this.taskService.done(task);
    }

    save() {
        this.taskService.saveTask();
    }
}
