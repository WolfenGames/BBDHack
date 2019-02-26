import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ListboardroomsComponent } from './listboardrooms/listboardrooms.component';
import { ViewboardroomComponent } from './viewboardroom/viewboardroom.component';
import { QrscanComponent } from './qrscan/qrscan.component';
import { MybookingsComponent } from './mybookings/mybookings.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'boardrooms', component: ListboardroomsComponent },
  // { path: 'view-boardroom', component: ViewboardroomComponent },
  { path: 'view-boardroom/:id', component: ViewboardroomComponent },
  { path: 'qrscan', component: QrscanComponent },
  { path: 'my-bookings', component: MybookingsComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
