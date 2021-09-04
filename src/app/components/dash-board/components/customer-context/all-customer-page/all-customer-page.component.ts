import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../../services/customer.service";

@Component({
  selector: 'app-all-customer-page',
  templateUrl: './all-customer-page.component.html',
  styleUrls: ['./all-customer-page.component.scss']
})
export class AllCustomerPageComponent implements OnInit {

  customers:any[]=[];

  constructor(private _service: CustomerService) { }

  ngOnInit(): void {
    this._service.getAllCustomers().subscribe(respose=>{
      this.customers = respose.data;
    }, error => {
      console.log(error);
    })
  }

}
