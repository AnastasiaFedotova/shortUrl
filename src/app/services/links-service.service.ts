import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Link } from '../link';

@Injectable({
  providedIn: 'root'
})
export class LinksServiceService {
  constructor(private http: HttpClient){ }

  generateLink(link : Link){
    const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');

    return this.http.post('http://localhost:3000/', link, { headers: headers });
  }
}
