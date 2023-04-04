import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: string | number = 0;
  @Input() maxRating: string | number = 5;

  stars: number[] = [];

  constructor() {
  }

  ngOnInit() {
    this.stars = this.stars.constructor(+this.maxRating).fill(1, 0, +this.rating);
  }
}
