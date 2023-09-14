import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isTopicValid=false;
validateTopic(topic: any) {
  if(topic==='default') this.isTopicValid=false;
  else this.isTopicValid=true
}
  title = 'tdf';
  topics = ["react","angular","vue"];
  userModel=new User('','rob@test.com',1234567890,'default','Morning',true);
}
