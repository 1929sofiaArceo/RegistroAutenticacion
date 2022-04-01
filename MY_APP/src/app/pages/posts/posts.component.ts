import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //me permite leer valores de la url activa
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //lo traemos en la inicializacion
    this.activatedRoute.queryParams.subscribe((params: any) =>{
      //sabemos que params en este caso tiene {user: 1} se recibe como obj
      console.log('el usuario es: '+ params.user);
    })
  }

}
