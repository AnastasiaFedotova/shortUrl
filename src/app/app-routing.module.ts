import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { ShortenerUrlComponent } from './components/shortener-url/shortener-url.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { LinksTagPageComponent } from './components/links-tag-page/links-tag-page.component';
import { UsersGuard } from './guards/users.guard';
import { GuestGuard } from './guards/guest.guard';
import { LinkPageComponent } from './components/link-page/link-page.component';

const routes: Routes = [
  { path: '', component: ShortenerUrlComponent },
  { path: 'registration', component: UserRegestrarionFormComponent, canActivate: [GuestGuard] },
  { path: 'logIn', component: LogInFormComponent, canActivate: [GuestGuard] },
  { path: 'linkList', component: LinksListComponent, canActivate: [UsersGuard] },
  { path: 'linkList/link/:id', component: LinkPageComponent },
  { path: 'linkList/:tag', component: LinksTagPageComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
