import { Component, OnInit } from '@angular/core';

import { User } from '../user'
import { Message } from '../message'


@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
