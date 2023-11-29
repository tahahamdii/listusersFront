import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './student-component/dashboard/dashboard.component';
import { StudentGuard } from 'src/app/auth/guards/sudent-guard/student.guard';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent,canActivate: [StudentGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
