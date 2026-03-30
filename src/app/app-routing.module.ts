import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'thoughts-list',
    pathMatch: 'full'
  },
  {
    path: 'create-thought',
    component: CreateThoughtComponent
  },
  {
    path: 'thoughts-list',
    component: ThoughtsListComponent
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'thoughts/editThought/:id',
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
