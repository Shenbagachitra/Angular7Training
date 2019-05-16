import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 7';
  type = "easy";
  score=10;

  displaymessage=function(){
    //alert("Current score is :"+ this.score)
    
    return "welcome to angular"

}
} 

