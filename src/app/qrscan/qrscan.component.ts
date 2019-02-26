import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DynamicScriptLoaderService } from '../js-loader.service';
declare const qrcode: any;

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.component.html',
  styleUrls: ['./qrscan.component.css']
})
export class QrscanComponent implements OnInit {
  constructor(private _jsload: DynamicScriptLoaderService) { }
  x: any;
  gCtx;
  gCanvas;

  ngOnInit() {
    this._jsload.load('scannerthingy');
    // this.gCanvas = document.getElementById('qr-canvas');
    // this.gCanvas.style.width = '100px';
    // this.gCanvas.style.height = '100px';
    // this.gCanvas.width = 100;
    // this.gCanvas.height = 100;
    // this.gCtx = this.gCanvas.getContext('2d');
    // this.gCtx.clearRect(0, 0, 100, 100);
    // this.x = this._elref.nativeElement.querySelector('#video');
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    //     try {
    //       this.x.srcObject = stream;
    //     } catch {
    //       this.x.src = window.URL.createObjectURL(stream);
    //     }
    //     this.x.play();
    //     this.cameraThing();
    //   });
    // }
  }

  // cameraThing(): void {
  //   try {
  //     this.gCtx.drawImage(this.x, 0, 0);
  //     try {
  //       qrcode.decode();
  //     } catch (e) {
  //       setTimeout(() => {
  //         this.cameraThing();
  //       }, 500);
  //     }
  //   } catch (e) {
  //     setTimeout(() => {
  //       this.cameraThing();
  //     }, 500);
  //   };
  // }
}
