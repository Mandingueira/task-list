import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {promise} from 'selenium-webdriver';
import fullyResolved = promise.fullyResolved;
import {TaskToDoComponent} from './components/task-to-do/task-to-do.component';
import {TaskDoneComponent} from './components/task-done/task-done.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/todoTask',
      pathMatch: 'full'
    },
    {
      path: 'todoTask',
      component: TaskToDoComponent
    },
    {
      path: 'doneTask',
      component: TaskDoneComponent
    },
    {
      path: '**',
      redirectTo: '/todoTask',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
