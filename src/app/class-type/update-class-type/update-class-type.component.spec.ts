import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassTypeComponent } from './update-class-type.component';

describe('UpdateClassTypeComponent', () => {
  let component: UpdateClassTypeComponent;
  let fixture: ComponentFixture<UpdateClassTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClassTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClassTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
