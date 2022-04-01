import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { 

  }
  /*
  postUsers(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.post(url);
  }*/
}
