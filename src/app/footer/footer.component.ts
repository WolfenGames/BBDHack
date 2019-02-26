import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../js-loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private jsLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.cameraShit();
  }

  cameraShit(): void {
    setTimeout(() => {
      this.cameraShit();
    }, 5);
  }

}
