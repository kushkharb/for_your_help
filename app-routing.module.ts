import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
{path:"emp-details",component:EmpDetailsComponent},
{path:"emp-list",component:EmpListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
