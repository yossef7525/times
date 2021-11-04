import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './comps/c1/c1.component';
import { C2Component } from './comps/c2/c2.component';
import { C3Component } from './comps/c3/c3.component';

const routes: Routes = [
  {path: 'c1', component:C1Component},
  {path: 'c2', component:C2Component},
  {path: 'c3', component:C3Component},
  {path: '', redirectTo:'/c1', pathMatch:'full' },
  {path: '**', redirectTo:'/c1', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
