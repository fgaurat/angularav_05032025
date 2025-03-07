import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-root',
  imports: [AddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tdd-app';
}
