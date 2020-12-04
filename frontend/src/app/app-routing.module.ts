import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import {JoinqueueComponent} from './joinqueue/joinqueue.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowqueueComponent } from './showqueue/showqueue.component';




const routes: Routes = [
  {path:'',component:EventsComponent},
  {path:'registration', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'events',component:EventsComponent},
  {path:'joinqueue',component:JoinqueueComponent},
  {path:'showqueue',component:ShowqueueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
