import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShortLinks } from './../interface/shortLinks';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class UserSessionService {
  isAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  urlApiAuth: string = `${environment.apiUrl}/authorize`;
  urlApiUserList: string = `${environment.apiUrl}/v1/links/userList`;

  constructor(private http: HttpClient) { }

  checkSession(): Observable<boolean> {
    return this.http.get<boolean>(this.urlApiAuth, {
      withCredentials: true
    })
  }

  readUserList(): Observable<ShortLinks[]> {
    return this.http.get<ShortLinks[]>(this.urlApiUserList, {
      withCredentials: true
    });
  }

  removeSession() {
    return this.http.delete(this.urlApiAuth, {
      withCredentials: true
    })
  }
}
