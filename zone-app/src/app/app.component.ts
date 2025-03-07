import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { TestChangeDetectorComponent } from './test-change-detector/test-change-detector.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [TestZoneComponent,TestChangeDetectorComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zone-app';
}
