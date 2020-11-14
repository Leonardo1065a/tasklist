import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTasklistOneComponent } from './new-tasklist-one.component';

describe('NewTasklistOneComponent', () => {
  let component: NewTasklistOneComponent;
  let fixture: ComponentFixture<NewTasklistOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTasklistOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTasklistOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
