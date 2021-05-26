import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShortenerUrlComponent } from './components/shortener-url/shortener-url.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LinksListComponent } from './components/links-list/links-list.component';
import { LinkFormComponent } from './components/link-form/link-form.component';
import { LinkPageComponent } from './components/link-page/link-page.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersLinksEffect } from './store/effects/usersLinkList.effects';
import { AuthEffect } from './store/effects/auth.effects';
import { AppReducer } from './store/redurcers/app.reducers';
import { UsersEffect } from './store/effects/users.effects';
import { AddedShortLinksEffect } from './store/effects/addedShortLinks.effects';
import { ChangedShortLinksEffect } from './store/effects/changedShortLinks.effects';
import { LinksEffect } from './store/effects/linkList.effects';
import { CommentsEffect } from './store/effects/commentsList.effects';
import { GettedUserEffect } from './store/effects/gettedUser.effects';

@NgModule({
  declarations: [
    AppComponent,
    ShortenerUrlComponent,
    UserRegestrarionFormComponent,
    LogInFormComponent,
    LinksListComponent,
    LinkFormComponent,
    LinkPageComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([LinksEffect, UsersLinksEffect, AuthEffect,
      UsersEffect, AddedShortLinksEffect, ChangedShortLinksEffect, CommentsEffect,
      GettedUserEffect])
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})

export class AppModule { }
