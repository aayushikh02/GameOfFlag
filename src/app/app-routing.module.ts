import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextComponent } from './next/next.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [{path:"next",component:NextComponent},{path:"first",component:FirstComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
 }
