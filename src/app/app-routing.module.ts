import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {FinalProject2Component} from "./final-project2/final-project2.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'Home', component: HomeComponent },
  { path: 'FinaleProject', component: FinalProject2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
