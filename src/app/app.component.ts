import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-web';

  constructor(){
   
  }
  // button_click(){
  //   $("#content").css("display","none");
  // }
}