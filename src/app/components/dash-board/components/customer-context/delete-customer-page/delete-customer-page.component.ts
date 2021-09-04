import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../services/customer.service";
import CustomerDTO from "../../../../../dto/CustomerDTO";

@Component({
  selector: 'app-delete-customer-page',
  templateUrl: './delete-customer-page.component.html',
  styleUrls: ['./delete-customer-page.component.scss']
})
export class DeleteCustomerPageComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(5)
    ])
  });

  constructor(private _customerService: CustomerService) {
  }
  ngOnInit(): void {
  }
  uploadData() {
    this._customerService.deleteCustomer(this.customerForm.get('id')?.value).subscribe(response => {
      alert('Deleted..');
      this.customerForm.reset();
      // inspectors
    }, error => {
      console.log(error)
    })
  }



}
