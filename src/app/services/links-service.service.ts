import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Links } from '../interface/links';

@Injectable({
  providedIn: 'root'
})
export class LinksServiceService {
  constructor(private http: HttpClient) { }

  generateLink(link: Links) {
    return this.http.post('http://localhost:3000/api/v1/links', link);
  }
}
