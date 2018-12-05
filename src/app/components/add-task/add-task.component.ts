import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {Task} from '../../model/task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  add() {
    const task: Task = ({ name: this.newTask, created: new Date().toLocaleString(), isDone: false });
    this.taskService.add(task);
    this.newTask = '';
  }

}
