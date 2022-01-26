import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.url}/posts`)
  }

  create() {

  }

  update() {

  }

  remove() {

  }

}
