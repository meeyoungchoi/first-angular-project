import { Component } from '@angular/core';

// component 클래스
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './todo/todos/todos.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!!!';
}
