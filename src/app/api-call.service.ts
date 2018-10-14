import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(post: Partial<Post>): Observable<any> {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(endpoint, JSON.stringify(post));
  }
}
