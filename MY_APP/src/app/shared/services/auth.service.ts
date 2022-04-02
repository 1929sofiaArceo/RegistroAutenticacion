import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  save(token: string){
    localStorage.setItem('token', token);
  }

  get(): string{
    return localStorage.getItem('token') || '';
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  remove(): void{
    console.log("pass");
    localStorage.removeItem('token'); //cerramos sesion
  }
}
