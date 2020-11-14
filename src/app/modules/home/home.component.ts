import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  theme(type: number) {
    this.router.navigate([type === 1 ? this.routeOne : this.routeTwo]);
  }

  get routeOne() {
    return '/tasklist-one';
  }

  get routeTwo() {
    return '/tasklist-two';
  }

}
