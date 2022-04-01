import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../interfaces/user'; //interfaz que me especifica parametros
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] = [
    {name: 'Sofia Arceo', email: 'sofi@hotmail.com'},
    {name: 'Frida Arceo', email: 'frida@hotmail.com'}
  ];

  constructor(private httpClient: HttpClient) { 

  }

  getUsers(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(url);
  }
}
