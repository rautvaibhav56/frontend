import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  password = '';
  contact = '';
  address = '';
  pin = 0;
  gender = '';
  state = '';
  country= '';


  constructor(
    private router: Router,
    private customerservice: CustomerService) { }

  ngOnInit() {
  }

  onAdd() {
    
    this.customerservice
      .addCustomer(this.first_name, this.last_name, this.email, this.password, this.contact, this.address, this.pin , this.gender,this.state,this.country)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/customer-list']);
      });
  }

  onCancel() {
    this.router.navigate(['/customer-list']);
  }

}
