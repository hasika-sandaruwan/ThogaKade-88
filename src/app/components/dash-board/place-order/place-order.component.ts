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

    this.allItems.push({"code":"ITL-2585","description":"Sample Product 1","unitPrice":25,"qtyOnHand":245});
    this.allItems.push({"code":"ITL-2586","description":"Sample Product 2","unitPrice":75,"qtyOnHand":745});
    this.allItems.push({"code":"ITL-2587","description":"Sample Product 3","unitPrice":84,"qtyOnHand":784});
    this.allItems.push({"code":"ITL-2588","description":"Sample Product 4","unitPrice":72,"qtyOnHand":965});
    this.allItems.push({"code":"ITL-2589","description":"Sample Product 5","unitPrice":76,"qtyOnHand":743});

    this.selectedItem=this.allItems[0];
  }

  allCustomer: any[] = [];
  selectedCustomer: any=null;

  allItems:any[]=[];
  selectedItem:any=null;

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

  setItem(id: string) {
    for (const temp of this.allItems){
      if (temp.code===id){
        this.selectedItem = temp;
      }
    }
  }
}
