import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bookboardroom',
  templateUrl: './bookboardroom.component.html',
  styleUrls: ['./bookboardroom.component.css']
})
export class BookboardroomComponent implements OnInit {

  private currentParams: String;
  private paramArray: String[];// = this.currentParams.split('&');
  private roomName: String;// = this.paramArray[0];
  //private roomName: String = this.paramArray[0].split('=')[1];
  private Rooms = [
    {
      'FullName': 'Megan ...',
      'StartTime': 'This is a start date',
      'EndTime': 'This is a end date'
    }, {
      'FullName': 'Not a Megan ...',
      'StartTime': 'This is a start date',
      'EndTime': 'This is a end date'
    },
    {
      'FullName': 'Real Meghan ...',
      'StartTime': 'This is a start date',
      'EndTime': 'This is a end date'
    }
  ];
  private todayDate: any = {
    roomid: null,
    day: null,
    month: null,
    year: null
  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentParams = this.route.snapshot.params['id']; // Collab?id=0
    this.paramArray = this.currentParams.split('&');
    this.roomName = this.paramArray[0].split('=')[1];
    console.log(this.paramArray);
    console.log(this.roomName);
    for (let i = 1; i < this.paramArray.length; i++) {
      let str = this.paramArray[i].split('=');
      this.todayDate[str[0]] =  str[1];
    }
    console.log(this.todayDate);
  }

}
