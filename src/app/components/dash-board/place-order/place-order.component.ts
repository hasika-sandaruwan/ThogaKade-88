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
  selectedCustomer: any=null;

  private loadAllCustomers() {
    this._customerService.getAllCustomers().subscribe(response => {
      this.allCustomer = response.data;
      if (response.data.length>0){
        this.selectedCustomer = response.data[0];
      }
    }, error => {
      console.log(error)
    })
  }

  setCustomer(id: string) {
    for (const temp of this.allCustomer){
      if (temp.id===id){
        this.selectedCustomer = temp;
      }
    }
  }
}
