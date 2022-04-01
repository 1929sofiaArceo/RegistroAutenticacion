import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: string = '';
  messages: string[] = [];
  socketClient: any  = null;

  constructor() { }

  ngOnInit(): void {
    this.socketClient = socketIo.io(environment.socketUrl);
    
    this.socketClient.on('recieveMessage', (data:any)=>{
      console.log('Llego un mensaje');
      this.messages.push(data.message);
    })
  }
  send() {
    console.log('enviar mensaje');
    this.messages.push(this.message);
    this.socketClient.emit('newMessage', {
      message: this.message //lo mandamos antes de borrarlo
    });
    this.message = ''; // lo limpiamos
  }

}
