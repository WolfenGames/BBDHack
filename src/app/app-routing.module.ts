import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ListboardroomsComponent } from './listboardrooms/listboardrooms.component';
import { ViewboardroomComponent } from './viewboardroom/viewboardroom.component';
import { QrscanComponent } from './qrscan/qrscan.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { BookboardroomComponent } from './bookboardroom/bookboardroom.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'boardrooms', component: ListboardroomsComponent },
  // { path: 'view-boardroom', component: ViewboardroomComponent },
  { path: 'view-boardroom/:id', component: ViewboardroomComponent },
  { path: 'book-boardroom/:id', component: BookboardroomComponent },
  { path: 'qrscan', component: QrscanComponent },
  { path: 'my-bookings', component: MybookingsComponent },
  { path: '**', component: MainComponent }
=======
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
