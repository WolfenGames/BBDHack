import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from '../js-loader.service';
import { QrscanService } from '../qrscan.service';
import { $ } from 'protractor';
import { MatSnackBar } from '@angular/material';
declare const load: any;
declare let loading: boolean;
declare let result: string;
declare let v: any;
declare let streamO: any;

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.component.html',
  styleUrls: ['./qrscan.component.css']
})
export class QrscanComponent implements OnInit {
  constructor(private jsLoad: DynamicScriptLoaderService, private qrService: QrscanService,
              private snackbar: MatSnackBar) { }
  x: any;
  gCtx;
  gCanvas;

  ngOnInit() {
    this.jsLoad.load('scannerthingy');
    setTimeout(() => {
      this.DoDaThing();
    }, 500);
  }

  DoDaThing(): void {
    setTimeout(() => {
      if (result) {
        this.snackbar.open('Found', result, { horizontalPosition: 'center' });
        if (this.qrService.loadRoom(result) === 'Valid') {
          document.getElementById('v').style.display = 'none';
          v.pause();
          streamO.getTracks().forEach(track => track.stop());
        } else {
          result = null;
          this.DoDaThing();
        }
      } else {
        result = null;
        this.DoDaThing();
      }
    }, 500);
  }
}
