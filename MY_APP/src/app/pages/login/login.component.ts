import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  socketClient: any  = null;
  credentials: any = {};
  flagBadLogin: boolean = true;

  constructor(private loginService: LoginService, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.socketClient = socketIo.io(environment.socketUrl);
    this.socketClient.on('recieveCredentials', (data:any)=>{
      console.log('Llegaron nuevas credenciales', data);
    })
  }

  login(){
    console.log('enviar datos', this.credentials);
    this.socketClient.emit('enviarDatos', this.credentials);
    this.loginService.login(this.credentials).then(response =>{
      this.authService.save(response.token),
      this.router.navigate(['/home']);
      console.log(response);
    }).catch(error=>{
      console.log('datos incorrectos');

    });;
  }

}
