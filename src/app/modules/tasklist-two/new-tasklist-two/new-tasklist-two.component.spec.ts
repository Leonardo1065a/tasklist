import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTasklistTwoComponent } from './new-tasklist-two.component';

describe('NewTasklistTwoComponent', () => {
  let component: NewTasklistTwoComponent;
  let fixture: ComponentFixture<NewTasklistTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTasklistTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTasklistTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
