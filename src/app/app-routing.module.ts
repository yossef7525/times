import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './comps/c1/c1.component';
import { C2Component } from './comps/c2/c2.component';
import { C3Component } from './comps/c3/c3.component';
import { LoginGoogleComponent } from './comps/login-google/login-google.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: 'home', canActivate: [LoginGuard], component: C1Component },
  { path: 'login', component: LoginGoogleComponent },
  { path: 'c3', component: C3Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LoginGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
