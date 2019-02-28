import { Injectable } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { User } from '../modals/user.modal';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url: string = "http://localhost:49396/api/";

  constructor(
    private httpclient: HttpClient, 
    private router: Router
  ) { }

  // StartTime and EndTime needs to be in format : "2019-02-27 14:20 PM"
  addBooking(roomId: string, startTime: string, endTime: string) {

    let startTimeConverted = moment(startTime, "YYYY-MM-DD[T]HH:mm:ss").format("YYYY-MM-DD HH:mm A");
    let endTimeConverted = moment(endTime, "YYYY-MM-DD[T]HH:mm:ss").format("YYYY-MM-DD HH:mm A");

    console.log('startTimeConverted is: ' + startTimeConverted);
    console.log('endTimeConverted is: ' + endTimeConverted);

    // let urlParams: string = "roomID=" + roomId + "&begin=" + startTime + "&stop=" + endTime;

    // this.httpclient.get<{ message: any }>(this.url + "AddBooking?" + urlParams, { withCredentials: true }).subscribe((response) => {

    // });
  }

}
