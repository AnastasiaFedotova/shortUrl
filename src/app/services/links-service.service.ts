import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Links, updateLinks } from '../interface/links';

@Injectable({
  providedIn: 'root'
})
export class LinksServiceService {
  constructor(private http: HttpClient) { }

  generateLink(link: Links) {
    return this.http.post('http://localhost:3000/api/v1/links', link, {
      withCredentials: true
    });
  }

  changeNameLink(link: updateLinks) {
    return this.http.put('http://localhost:3000/api/v1/links', link, {
      withCredentials: true
    });
  }
}
