import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ShortLinks } from './../interface/shortLinks';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserSessionService {
  isAuth: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  emitIsAut(isAut) {
    this.isAuth.emit(isAut);
  }

  getIsAut() {
    return this.isAuth;
  }

  checkSession(): void {
    this.http.get<boolean>('http://localhost:3000/api/authorize', {
      withCredentials: true
    }).subscribe((value) => this.emitIsAut(value));
  }

  readUserList(): Observable<ShortLinks[]> {
    return this.http.get<ShortLinks[]>('http://localhost:3000/api/v1/links/userList', {
      withCredentials: true
    });
  }

  removeSession() {
    return this.http.delete('http://localhost:3000/api/authorize', {
      withCredentials: true
    })
  }
}
