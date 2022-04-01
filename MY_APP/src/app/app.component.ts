import { Component } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Sofia';
  
  flag: boolean = true;
  title = 'MY_APP';
  searchValue: string='';

  movies: string[] = [
    'Batman',
    'Superman',
    'Spiderman'
  ]

  constructor() {
    setTimeout(() => {
      this.name = 'Sofia';
      this.movies.push('Flash');
    }, 2000);
  }

  ngOnInit() : void{
    socketIo.io(environment.socketUrl);
  };

  doOnClick(){
    console.log("me hicieron click");
    this.flag = !this.flag;
  }

  addMovie(e: any){
    console.log('clickAddMovie');
    console.log(this.searchValue);
    e.preventDefault();
    this.movies.push(this.searchValue);
    this.searchValue = ''; //limpiamos movieField

  }


  // setSearchValue(e: any){
  //   console.log('event: ', e.target.value);
  //   this.searchValue = e.target.value;
  // }
}
