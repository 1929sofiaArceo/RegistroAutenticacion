import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credentials: any): Promise<any>{
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        if(credentials.username == 'Arceo'){
          resolve({
            token: '8493489430',
            username: credentials.username,
            password: credentials.password
          })
        }else{
          reject('usuario erroneo')
        }
      }, 1000);
    })
  }
}
