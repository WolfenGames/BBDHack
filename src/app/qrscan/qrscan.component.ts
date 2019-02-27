import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from '../js-loader.service';
import { QrscanService } from '../qrscan.service';
import { $ } from 'protractor';
declare const load: any;
declare let loading: boolean;
declare let result: string;

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.component.html',
  styleUrls: ['./qrscan.component.css']
})
export class QrscanComponent implements OnInit {
  constructor(private _jsload: DynamicScriptLoaderService, private qrService: QrscanService) { }
  x: any;
  gCtx;
  gCanvas;

  ngOnInit() {
    this._jsload.load('scannerthingy');
    setTimeout(() => {
      this.DoDaThing();
    }, 500);
  }

  DoDaThing(): void {
    setTimeout(() => {
      if (result) {
        if (this.qrService.loadRoom(result) === "Valid") {
          document.getElementById('v').style.display = "none";
        } else {
          this.DoDaThing();
        }
      } else {
        this.DoDaThing();
      }
    }, 500);
  }
}
