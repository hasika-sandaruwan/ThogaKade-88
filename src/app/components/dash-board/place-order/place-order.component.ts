import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  allCustomer: any[] = [];

  private loadAllCustomers() {
    this._customerService.getAllCustomers().subscribe(response => {
      this.allCustomer = response.data;
      console.log(this.allCustomer);
    }, error => {
      console.log(error)
    })
  }

}
