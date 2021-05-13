import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';

const routes: Routes = [
  { path: 'registration', component: UserRegestrarionFormComponent },
  { path: 'logIn', component: LogInFormComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
