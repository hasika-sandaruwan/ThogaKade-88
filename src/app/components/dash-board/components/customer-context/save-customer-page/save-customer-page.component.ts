import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  uploadData() {
    console.log(this.customerForm);
  }

}
