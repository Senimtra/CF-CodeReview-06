import { Component, OnInit } from '@angular/core';
import { reviews } from '../reviews';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
})
export class ReviewPageComponent implements OnInit {
  reviews = reviews;

  constructor() {}

  ngOnInit(): void {}
}
