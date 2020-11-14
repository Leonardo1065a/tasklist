import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
  { path: 'tasklist-one', loadChildren: './modules/tasklist-one/tasklist-one.module#TasklistOneModule'},
  { path: 'tasklist-two', loadChildren: './modules/tasklist-two/tasklist-two.module#TasklistTwoModule'},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
