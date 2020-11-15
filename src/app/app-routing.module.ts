import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
  { path: 'tasklist-one', loadChildren: './modules/tasklist-one/tasklist-one.module#TasklistOneModule'},
  { path: 'tasklist-two', loadChildren: './modules/tasklist-two/tasklist-two.module#TasklistTwoModule'},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
