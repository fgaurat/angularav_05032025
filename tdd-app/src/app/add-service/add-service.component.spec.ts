import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceComponent } from './add-service.component';
import { AddService } from '../add.service';

describe('AddServiceComponent', () => {
  let component: AddServiceComponent;
  let fixture: ComponentFixture<AddServiceComponent>;
  let addServiceSpy: jasmine.SpyObj<AddService>


  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AddService',['add'])

    await TestBed.configureTestingModule({
      imports: [AddServiceComponent],
      providers:[{provide:AddService,useValue:spy}]
    })
    .compileComponents();

    addServiceSpy = TestBed.inject(AddService) as jasmine.SpyObj<AddService>

    fixture = TestBed.createComponent(AddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should test the sum method',()=>{

    const result = 3
    addServiceSpy.add.and.returnValue(result)
    // arrange
    component.val1 = 1
    component.val2 = 2

    //act
    component.sum()
    fixture.detectChanges();

    // assert
    expect(component.result).toBe(3)

  })

});
