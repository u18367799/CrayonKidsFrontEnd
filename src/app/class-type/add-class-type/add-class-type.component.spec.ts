import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassTypeComponent } from './add-class-type.component';

describe('AddClassTypeComponent', () => {
  let component: AddClassTypeComponent;
  let fixture: ComponentFixture<AddClassTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
