import { TaskListService } from './../../services/tasklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist-two',
  templateUrl: './tasklist-two.component.html',
  styleUrls: ['./tasklist-two.component.scss']
})
export class TasklistTwoComponent implements OnInit {

  constructor(private tasklist: TaskListService) { }

  ngOnInit() {
  }

}
