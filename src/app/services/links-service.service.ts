import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Links } from './../interface/link';

@Injectable({
  providedIn: 'root'
})
export class LinksServiceService {
  constructor(private http: HttpClient) { }

  generateLink(link: Links) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

    return this.http.post('http://localhost:3000/api/v1/links', link, { headers: headers });
  }
}
