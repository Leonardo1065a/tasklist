import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistOneComponent } from './tasklist-one.component';

describe('TasklistOneComponent', () => {
  let component: TasklistOneComponent;
  let fixture: ComponentFixture<TasklistOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
