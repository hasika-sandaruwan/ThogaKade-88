import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../services/customer.service";
import CustomerDTO from "../../../../../dto/CustomerDTO";

@Component({
  selector: 'app-save-customer-page',
  templateUrl: './save-customer-page.component.html',
  styleUrls: ['./save-customer-page.component.scss']
})
export class SaveCustomerPageComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(5)
    ]),
    name: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(15)
    ]),
    address: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(45)
    ]),
    salary: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  uploadData() {
    const dto = new CustomerDTO(
      this.customerForm.get('id')?.value,
      this.customerForm.get('name')?.value,
      this.customerForm.get('address')?.value,
      Number(this.customerForm.get('salary')?.value)
    );
    this._customerService.saveCustomer(dto).subscribe(response => {
      alert('Saved..');
      this.customerForm.reset();
      // inspectors
    }, error => {
      console.log(error)
    })
  }

}
