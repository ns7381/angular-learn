import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages = [];
  constructor() { }
  add(msg) {
    this.messages.push(msg);
  }
  clear() {
    this.messages = [];
  }
}
