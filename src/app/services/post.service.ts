import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://blogdb-json-server.onrender.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deletePost(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }

  editPost(post: any): Observable<any> {
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<any>(url, post);
  }
  getEditPost(id : number) : Observable<any>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<any>(url)
  }
}
