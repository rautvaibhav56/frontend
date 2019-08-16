import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  customers = [];

 
  constructor(
    private router: Router,
    private CustomerService: CustomerService) {

    this.refreshCustomerList();
  }

  refreshCustomerList() {
    this.CustomerService
      .getCustomer() 
      .subscribe(response => {
        const result = response.json();
        console.log(result);
        this.customers = result.data;
      });
  }

  ngOnInit() {
  }

  onDetails(customer) {
    
    this.router.navigate(['/customer-details'], { queryParams: {  Customer_Id: customer. Customer_Id } });
  }

  onDelete(customer) {
    const answer = confirm('Are you sure you want to delete ' +  customer.first_name + ' ?');
    if (answer) {
      this.CustomerService
        .deleteCustomer(customer.Customer_Id)
        .subscribe(response => {
          const result = response.json();
          console.log(result);
          this.refreshCustomerList();
        });
    }
  }

}
