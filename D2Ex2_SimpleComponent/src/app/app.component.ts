import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A simple Angular Component ';
   constructor() {
    setTimeout(this.greet, 500);
  }
  greet() {
    alert('Welcome to the first Angular component!');
  }
}

