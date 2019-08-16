import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  selectedCustomer = {};

  constructor(
    private customerService: CustomerService,
    private activedRoute: ActivatedRoute) {

    this.activedRoute.queryParams.subscribe(params => {
      const Customer_Id = params['Customer_Id'];
      
      this.customerService
        .getCustomerDetails(Customer_Id)
        .subscribe(response => {
          const result = response.json();
          this.selectedCustomer = result.data;
        });
    });
  }

  ngOnInit() {
  }

}
