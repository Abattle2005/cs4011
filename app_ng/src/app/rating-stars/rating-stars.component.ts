import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  imports: [],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css'
})
export class RatingStarsComponent {

  @Input() rating: number;
  
}
