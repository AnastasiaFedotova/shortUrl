import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LinksListComponent } from './components/links-list/links-list.component';

const routes: Routes = [
  { path: 'registration', component: UserRegestrarionFormComponent },
  { path: 'logIn', component: LogInFormComponent },
  { path: 'linkList', component: LinksListComponent }
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
