import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  foods = [];

  
  constructor(
    private router: Router,
    private foodService: FoodService) {

    this.refreshMovieList();
  }

  refreshMovieList() {
    this.foodService
      .getFood()
      .subscribe(response => {
        const result = response.json();
        console.log(result);
        this.foods = result.data;
      });
  }

  ngOnInit() {
  }

  onDetails(food) {
    
    this.router.navigate(['/fooddetails'], { queryParams: { id: food.id } });
  }

  onDelete(food) {
    const answer = confirm('Are you sure you want to delete ' +  food.food_Type + ' ?');
    if (answer) {
      this.foodService
        .deleteFood(food.id)
        .subscribe(response => {
          const result = response.json();
          console.log(result);
          this.refreshMovieList();
        });
    }
  }

}
