import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  registerUser(body: any): Observable<any>{
    const url = environment.socketUrl+'/api/users';
    return this.httpClient.post(url, body, {responseType: 'text'}); //mandamos usuario a la api
  }

  
}
