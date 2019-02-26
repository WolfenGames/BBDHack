import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewboardroom',
  templateUrl: './viewboardroom.component.html',
  styleUrls: ['./viewboardroom.component.css']
})
export class ViewboardroomComponent implements OnInit {

  // This does a look-ahead calculation of 6 days, excluding today.

  private dateObj: Date = new Date();
  private months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  private currentMonth: number = this.dateObj.getMonth(); // Zero indexed.
  private mod: number = this.months[this.currentMonth]; // Feb == 28.

  // Look-ahead variables, e.g. 26th, 27th, 28th, 1st, 2nd, 3rd, 4th.
  private today: number = this.dateObj.getDate();
  private todayPlus1: number = this.checkIfZeroReturnLastDay(this.today, 1, this.mod);
  private todayPlus2: number = this.checkIfZeroReturnLastDay(this.today, 2, this.mod);
  private todayPlus3: number = this.checkIfZeroReturnLastDay(this.today, 3, this.mod);
  private todayPlus4: number = this.checkIfZeroReturnLastDay(this.today, 4, this.mod);
  private todayPlus5: number = this.checkIfZeroReturnLastDay(this.today, 5, this.mod);
  private todayPlus6: number = this.checkIfZeroReturnLastDay(this.today, 6, this.mod);

  private currentDay: number = this.dateObj.getDay();

  // Look-ahead variables, but this time, to hold the week day's name.
  private todayName: String = this.getDayName(this.currentDay, 0);
  private todayPlus1Name: String = this.getDayName(this.currentDay, 1);
  private todayPlus2Name: String = this.getDayName(this.currentDay, 2);
  private todayPlus3Name: String = this.getDayName(this.currentDay, 3);
  private todayPlus4Name: String = this.getDayName(this.currentDay, 4);
  private todayPlus5Name: String = this.getDayName(this.currentDay, 5);
  private todayPlus6Name: String = this.getDayName(this.currentDay, 6);

  constructor() { }

  ngOnInit() {
  }

  // If a day modulated by mod is 0, it should return the mod instead.
  // 28 mod 28 == 0, but 28th of Feb is a valid day.
  private checkIfZeroReturnLastDay(today: number, numberToAdd: number, mod: number): number {
    if ((today + numberToAdd) % mod === 0) {
      return mod;
    }
    return ((today + numberToAdd) % mod);
  }

  // (2 (Tue) + 6) % 7 = 1 (Mon).
  private getDayName(today: number, numberToAdd: number): String {
    let ans: number = (today + numberToAdd) % 7;

    if (ans === 1) return 'Mon';
    else if (ans === 2) return 'Tue';
    else if (ans === 3) return 'Wed';
    else if (ans === 4) return 'Thur';
    else if (ans === 5) return 'Fri';
    else if (ans === 6) return 'Sat';

    return 'Sun';
  }

}
