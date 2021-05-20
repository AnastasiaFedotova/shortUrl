import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LogInServiceService {
  urlApiAuth: string = `${environment.apiUrl}/authorize`;
  constructor(private http: HttpClient) {
  }

  logIn(user: Users) {
    return this.http.post(this.urlApiAuth, user, {
      withCredentials: true
    });
  }
}
