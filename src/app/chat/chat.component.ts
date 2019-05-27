import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { User } from '../user';
import { MESSAGES } from '../mock-messages';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    messages = MESSAGES;
    users = USERS;

  
  constructor() { }

  ngOnInit() {
  }

}
