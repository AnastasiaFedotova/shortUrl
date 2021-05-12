import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  constructor(private http: HttpClient) { }

  addUser(user: Users) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

    return this.http.post('http://localhost:3000/api/v1/users', user, { headers: headers });
  }
}
