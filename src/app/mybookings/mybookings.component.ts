import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  private currentBookings =
  [
    {
        "BookingID": 11,
        "UserID": 1,
        "RoomID": 5,
        "StartTime": "2019-02-26T23:00:46.403",
        "EndTime": "2019-02-26T23:00:46.403",
        "RoomStatus": null,
        "FullName": "Brandon Ngwenya",
        "RoomName": "Python"
    },
    {
        "BookingID": 12,
        "UserID": 1,
        "RoomID": 1,
        "StartTime": "2019-02-27T02:25:30.517",
        "EndTime": "2019-02-27T02:25:30.517",
        "RoomStatus": 0,
        "FullName": "Brandon Ngwenya",
        "RoomName": "Collab"
    },
    {
        "BookingID": 16,
        "UserID": 1,
        "RoomID": 5,
        "StartTime": "2019-02-27T02:25:30.517",
        "EndTime": "2019-02-27T02:25:30.517",
        "RoomStatus": 0,
        "FullName": "Brandon Ngwenya",
        "RoomName": "Python"
    },
    {
        "BookingID": 18,
        "UserID": 1,
        "RoomID": 3,
        "StartTime": "2019-02-27T11:25:26.62",
        "EndTime": "2019-02-27T11:25:26.62",
        "RoomStatus": 0,
        "FullName": "Brandon Ngwenya",
        "RoomName": "XAML"
    },
    {
        "BookingID": 19,
        "UserID": 1,
        "RoomID": 3,
        "StartTime": "2019-02-27T11:25:26.62",
        "EndTime": "2019-02-27T11:25:26.62",
        "RoomStatus": 0,
        "FullName": "Brandon Ngwenya",
        "RoomName": "XAML"
    },
    {
        "BookingID": 20,
        "UserID": 1,
        "RoomID": 1,
        "StartTime": "2019-02-27T11:25:26.62",
        "EndTime": "2019-02-27T11:25:26.62",
        "RoomStatus": 0,
        "FullName": "Brandon Ngwenya",
        "RoomName": "Collab"
    },
    {
        "BookingID": 22,
        "UserID": 1,
        "RoomID": 1,
        "StartTime": "2019-02-27T08:30:55",
        "EndTime": "2019-02-27T08:30:55",
        "RoomStatus": 0,
        "FullName": "Brandon Ngwenya",
        "RoomName": "Collab"
    },
    {
        "BookingID": 23,
        "UserID": 1,
        "RoomID": 4,
        "StartTime": "2019-02-27T14:15:00",
        "EndTime": "2019-02-27T14:45:00",
        "RoomStatus": 0,
        "FullName": "Brandon Ngwenya",
        "RoomName": "Collab"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteBooking(BookingID) {
    document.getElementById("" + BookingID).remove();
    console.log('Deleting booking with ID: ' + BookingID);
  }

}
