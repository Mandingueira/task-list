import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';
import {Task} from '../model/task';
import {HttpService} from './http.service';
import {HttpParams} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

    private taskListObs = new BehaviorSubject<Array<Task>>([]);

    constructor(private httpServices: HttpService) {
        this.httpServices.getTasks().subscribe(list => {
            this.taskListObs.next(list);
        });
    }

    add(task: Task) {
        const list = this.taskListObs.getValue();
        list.push(task);
        this.taskListObs.next(list);
    }

    remove(task: Task) {
        const list = this.taskListObs.getValue().filter(e => e !== task);
        this.taskListObs.next(list);
    }

    done(task: Task) {
        task.end = new Date().toLocaleDateString();
        task.isDone = true;
        const list = this.taskListObs.getValue();
        this.taskListObs.next(list);
    }

    getTaskListObs(): Observable<Array<Task>>{
        return this.taskListObs.asObservable();
    }

    saveTask() {
        this.httpServices.saveTasks(this.taskListObs.getValue());
    }
}
