import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule } from '@angular/material';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QrscanComponent } from './qrscan/qrscan.component';
import { MainComponent } from './main/main.component';
import { ListboardroomsComponent } from './listboardrooms/listboardrooms.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ViewboardroomComponent } from './viewboardroom/viewboardroom.component';
import { BookboardroomComponent } from './bookboardroom/bookboardroom.component';
import { CheckinComponent } from './checkin/checkin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Services


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QrscanComponent,
    MainComponent,
    ListboardroomsComponent,
    MybookingsComponent,
    ViewboardroomComponent,
    BookboardroomComponent,
    CheckinComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
