import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Links, updateLinks } from '../interface/links';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LinksServiceService {
  urlApiLinks: string = `${environment.apiUrl}/v1/links`;
  constructor(private http: HttpClient) { }

  generateLink(link: Links) {
    return this.http.post(this.urlApiLinks, link, {
      withCredentials: true
    });
  }

  changeNameLink(link: updateLinks) {
    return this.http.put(this.urlApiLinks, link, {
      withCredentials: true
    });
  }
}
