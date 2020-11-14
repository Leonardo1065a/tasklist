import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistTwoComponent } from './tasklist-two.component';

describe('TasklistTwoComponent', () => {
  let component: TasklistTwoComponent;
  let fixture: ComponentFixture<TasklistTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
