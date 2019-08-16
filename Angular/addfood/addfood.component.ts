import { Component, OnInit } from '@angular/core';
import {FoodService} from '../food.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  
  food_Type = '';
  Quantity = 0;
  price = 0;
  food_Description ='';





  constructor(
    private router: Router,
    private FoodService : FoodService) { }

  ngOnInit() {
  }

  onAdd() {
  
  this.FoodService
  .addFood(this.food_Type,this.Quantity,this.price,this.food_Description)
  .subscribe(response => {
    console.log(response);

    this.router.navigate(['/foodadd']);

  });


}
onCancel() {
  this.router.navigate(['/foodlist']);
}

}