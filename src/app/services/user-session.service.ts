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
  urlApiLinksList: string = `${environment.apiUrl}/v1/links`;

  constructor(private http: HttpClient) { }

  checkSession(): Observable<string> {
    return this.http.get<string>(this.urlApiAuth, {
      withCredentials: true
    })
  }

  readUserLinksList(): Observable<ShortLinks[]> {
    return this.http.get<ShortLinks[]>(this.urlApiUserList, {
      withCredentials: true
    });
  }

  readLinksList(): Observable<ShortLinks[]> {
    return this.http.get<ShortLinks[]>(this.urlApiLinksList, {
      withCredentials: true
    });
  }

  readTagsLinksList(tag: string): Observable<ShortLinks[]> {
    return this.http.get<ShortLinks[]>(`${this.urlApiLinksList}/${tag}`, {
      withCredentials: true
    });
  }

  removeSession() {
    return this.http.delete(this.urlApiAuth, {
      withCredentials: true
    })
  }
}
