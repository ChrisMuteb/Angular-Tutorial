import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MyFirstService {
  messages: Array<any> = [];
  constructor() {
    this.init();
  }

  init(): void{
    this.insert({
      name: 'Chris',
      email: 'chris@example.com',
      message: 'Hello World'
    });
    this.insert({
      name: 'John',
      email: 'john@example.com',
      message: 'Hello World - John'
    });
    this.insert({
      name: 'Doe',
      email: 'doe@example.com',
      message: 'Hello World - Doe'
    });
    this.insert({
      name: 'Firas',
      email: 'firas@example.com',
      message: 'Hello World - Firas'
    });
  }

  insert(message: {name: string, email: string, message: string}): void{
    this.messages.push(message);
  }

  getAllMessages(){
    return this.messages;
  }

  deleteMessage(index: number){
    this.messages.splice(index, 1);
  }
}
