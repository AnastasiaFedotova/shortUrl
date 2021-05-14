import { NgModule } from '@angular/core';
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
import { AppRoutingModule } from './app-routing.module';
import { UserRegestrarionFormComponent } from './components/user-regestrarion-form/user-regestrarion-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LinksListComponent } from './components/links-list/links-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ShortenerUrlComponent,
    UserRegestrarionFormComponent,
    LogInFormComponent,
    LinksListComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
