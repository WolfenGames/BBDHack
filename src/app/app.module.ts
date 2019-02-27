import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatSnackBarModule } from '@angular/material';

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
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Services

=======
import { NgxQRCodeModule  } from 'ngx-qrcode2';
import { HttpClient } from 'selenium-webdriver/http';
>>>>>>> master

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
    // HttpClient,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule
=======
    NgxQRCodeModule,
    MatSnackBarModule
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
