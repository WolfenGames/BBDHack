import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QrscanService {

  constructor() { }

  loadRoom(val: string): any {
    if (val === 'Delphi-5') {
      return 'Valid';
    } else {
      return 'inValid';
    }
  }
}
