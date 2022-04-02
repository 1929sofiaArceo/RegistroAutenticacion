import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: any): Observable<any>{
    const url = environment.socketUrl+'/api/users/signIn';
    return this.httpClient.post(url, credentials); //mandamos usuario a la api para que verifique credenciales
  }
}
