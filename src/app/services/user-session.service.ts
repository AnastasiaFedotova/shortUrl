import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShortLinks } from './../interface/shortLinks';

@Injectable({
  providedIn: 'root'
})

export class UserSessionService {
  public isAut: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  checkSession() {
    const checkedSession = this.http.get('http://localhost:3000/api/authorize', {
      withCredentials: true
    }).pipe(tap((isAuthorized: boolean) => {
      this.isAut = isAuthorized;
    }));

    return checkedSession;
  }

  readUserList(): Observable<ShortLinks[]> {
    return this.http.get<ShortLinks[]>('http://localhost:3000/api/v1/links/userList', {
      withCredentials: true
    });
  }

  removeSession() {
    this.http.delete('http://localhost:3000/api/authorize', {
      withCredentials: true
    }).subscribe({
      next: (_data) => {
        console.log('Deleted');
        this.isAut = false;
        this.router.navigate(['']);
      },
      error: err => {
        console.log(err);
      }
    });;
  }
}
