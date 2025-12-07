import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { EmpViewComponent } from './emp-view/emp-view.component';

const routes: Routes = [
  {
    path : 'emp-form',
    component : EmpComponent
  },
  {
    path: 'emp-view',
    component: EmpViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
