import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTasklistOneComponent } from './edit-tasklist-one.component';

describe('EditTasklistOneComponent', () => {
  let component: EditTasklistOneComponent;
  let fixture: ComponentFixture<EditTasklistOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTasklistOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTasklistOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
