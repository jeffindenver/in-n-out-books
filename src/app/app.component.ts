/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/26/2020
 * Description: app component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In-n-Out-Books';
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out Books";
  }
}
