import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestZoneComponent } from './test-zone/test-zone.component';

@Component({
  selector: 'app-root',
  imports: [TestZoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zone-app';
}
