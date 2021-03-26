import { Component, OnInit } from '@angular/core';
import { travels } from '../travels';

@Component({
  selector: 'travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.scss'],
})
export class TravelPageComponent implements OnInit {
  travels = travels;
  constructor() {}

  ngOnInit(): void {}
}
