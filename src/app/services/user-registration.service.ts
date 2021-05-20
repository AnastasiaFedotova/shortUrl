import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  urlApiUsers: string = `${environment.apiUrl}/v1/users`;
  constructor(private http: HttpClient) { }

  addUser(user: Users) {
    return this.http.post(this.urlApiUsers, user, {
      withCredentials: true
    });
  }
}
