import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component'

const routes: Routes = [
  {
    path: '',
    component:LoginComponent

  },
  {
    path: 'home',
    component:HomeComponent

  },
  {
    path: 'details',
    component:DetailsComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
