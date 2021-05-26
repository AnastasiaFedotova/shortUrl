import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../interface/comments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  urlApi: string = `${environment.apiUrl}/comments`;
  constructor(private http: HttpClient) { }

  readComments(linksId) {
    return this.http.get(`${this.urlApi}/${linksId}`);
  }

  addComment(comment: Comments) {
    return this.http.post(this.urlApi, comment, {
      withCredentials: true
    });
  }
}
