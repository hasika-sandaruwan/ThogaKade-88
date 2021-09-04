import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../../services/customer.service";

@Component({
  selector: 'app-search-customer-page',
  templateUrl: './search-customer-page.component.html',
  styleUrls: ['./search-customer-page.component.scss']
})
export class SearchCustomerPageComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  dataSet:any;

  search(id: string) {
    this.customerService.searchCustomer(id).subscribe(response=>{
      this.dataSet = response.data;
    }, error => {
      console.log(error)
    })
  }
}
