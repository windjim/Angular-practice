import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  constructor() { }

  name: string = '';
  content: string = '';
  id: number = 0;
  messageList: Message[] = [];

  ngOnInit(): void {
  }
  addMessage() {
    if (!this.name.trim() || !this.content.trim()) {
      this.clear();
      return
    }
    const newMessage: Message = new Message(this.name, this.content, this.id);
    this.messageList.push(newMessage);
    this.id +=1;
    this.clear();
  }
  clear(): void {
    this.name = '';
    this.content = '';
  }
}
