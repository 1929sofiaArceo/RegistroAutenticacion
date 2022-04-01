import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/interfaces/user'; //interfaz que me especifica parametros
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private userService;
  users: User[] = [];

  constructor(userService: UserService) { 
    console.log(userService);
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      console.log('Response: ', response);
      this.users = response;
    })
  }

}
