import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../js-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private jsLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    // this.jsLoader.setField('header');
    // this.jsLoader.load('jQuery');
  }


}
