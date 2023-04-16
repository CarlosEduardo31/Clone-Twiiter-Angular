import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage: string = "";
  tweetMaxLength: number = 240;
  tweetReamin: number = this.tweetMaxLength;

  constructor(private service: MessagesService) {

  }
  changeTweet() {
    this.tweetReamin = this.tweetMaxLength - this.tweetMessage.length;
  }

  sendTweet() {
    this.service.addMessage(this.tweetMessage);
    this.tweetMessage = "";
    this.tweetReamin = this.tweetMaxLength;
  }
}
