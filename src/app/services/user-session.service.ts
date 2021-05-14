import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShortLinks } from './../interface/shortLinks';

@Injectable({
  providedIn: 'root'
})

export class UserSessionService {
  constructor(private http: HttpClient) { }
  checkSession() {
    debugger
    const checkedSession = this.http.get('http://localhost:3000/api/authorize', {
      withCredentials: true
    });

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
      },
      error: err => {
        console.log(err);
      }
    });;
  }
}
