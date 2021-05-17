import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { usersRouters } from './users-guard-routers';
import { guestRouters } from './guest-guard-routers';

const routes: Routes = [
  { path: 'registration', component: UserRegestrarionFormComponent, canActivate: [guestRouters] },
  { path: 'logIn', component: LogInFormComponent, canActivate: [guestRouters] },
  { path: 'linkList', component: LinksListComponent, canActivate: [usersRouters] }
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
