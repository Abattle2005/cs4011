import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location } from '../location';
import { DistancePipe } from '../distance.pipe';

@Component({
  selector: 'app-home-list',
  standalone: true,
  imports: [CommonModule, RouterLink, DistancePipe],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css'
})
export class HomeListComponent implements OnInit {

  constructor(private loc8rDataService: Loc8rDataService) { }

  public locations: Location[];
  public message: string;

  ngOnInit() {
    this.getLocations();
  }

  private getLocations(): void {
    this.loc8rDataService
      .getLocations()
        .then(foundLocations => {
          this.message = foundLocations.length > 0 ? '' : 'No locations found';
          this.locations = foundLocations;
        });
  }
}

