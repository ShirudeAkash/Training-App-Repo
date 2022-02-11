import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training-App';
  name: string = "Akash"
  str: string = "This string is stroed in variable in app.component.ts";
  


  message = false
  choice = 2
  users =[
    {userID: 10 , firstName: 'Jenny'},
    {userID: 20 , firstName: 'Akash'},
  ];
  readMe() {
    this.message = !this.message
    console.log(this.name+ this.str);
  }

  
}

