import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { Message } from '../message';
import { MESSAGES } from '../mock-messages'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    messages = MESSAGES;

  
  constructor() { }

  ngOnInit() {
  }

}
