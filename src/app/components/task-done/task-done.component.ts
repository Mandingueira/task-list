import { Component } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../model/task";


@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent {

  taskDone: Array<Task> = [];

  constructor(private taskService: TasksService) {
      this.taskService.getTaskListObs().subscribe((tasks: Array<Task>)  => {
          this.taskDone = tasks.filter(t => t.isDone === true);
      });
  }
}
