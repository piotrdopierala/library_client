import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    feather.replace();
  }

}
