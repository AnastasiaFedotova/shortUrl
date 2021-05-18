import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { UsersGuard } from './guards/users.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  { path: 'registration', component: UserRegestrarionFormComponent, canActivate: [GuestGuard] },
  { path: 'logIn', component: LogInFormComponent, canActivate: [GuestGuard] },
  { path: 'linkList', component: LinksListComponent, canActivate: [UsersGuard] }
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
