import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';

const routes: Routes = [
  { path: 'registration', component: UserRegestrarionFormComponent }
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
