import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncCounterComponent } from './inc-counter.component';

describe('IncCounterComponent', () => {
  let component: IncCounterComponent;
  let fixture: ComponentFixture<IncCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
