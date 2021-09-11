import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer.service";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private _customerService: CustomerService, private _orderService: OrderService) {
  }

  ngOnInit(): void {
    this.loadAllCustomers();

    this.allItems.push({"code": "ITL-2585", "description": "Sample Product 1", "unitPrice": 25, "qtyOnHand": 245});
    this.allItems.push({"code": "ITL-2586", "description": "Sample Product 2", "unitPrice": 75, "qtyOnHand": 745});
    this.allItems.push({"code": "ITL-2587", "description": "Sample Product 3", "unitPrice": 84, "qtyOnHand": 784});
    this.allItems.push({"code": "ITL-2588", "description": "Sample Product 4", "unitPrice": 72, "qtyOnHand": 965});
    this.allItems.push({"code": "ITL-2589", "description": "Sample Product 5", "unitPrice": 76, "qtyOnHand": 743});

    this.selectedItem = this.allItems[0];
  }

  allCustomer: any[] = [];
  selectedCustomer: any = null;

  allItems: any[] = [];
  selectedItem: any = null;

  private loadAllCustomers() {
    this._customerService.getAllCustomers().subscribe(response => {
      this.allCustomer = response.data;
      if (response.data.length > 0) {
        this.selectedCustomer = response.data[0];
      }
    }, error => {
      console.log(error)
    })
  }

  setCustomer(id: string) {

    for (const temp of this.allCustomer) {
      if (temp.id === id) {
        this.selectedCustomer = temp;
      }
    }
  }

  setItem(id: string) {
    for (const temp of this.allItems) {
      if (temp.code === id) {
        this.selectedItem = temp;
      }
    }
  }

  cart: any[] = [];

  addToCart(requestedQTY: string) {
    let code = this.selectedItem?.code;
    let description = this.selectedItem?.description;
    let unitPrice = Number(this.selectedItem?.unitPrice);
    let total = Number(requestedQTY) * unitPrice;

    this.cart.push({
      "code": code, "description": description, "unitPrice": unitPrice,
      "requestedQTY": requestedQTY, "total": total
    });
    this.calculateCost();

  }

  delete(num: number) {
    this.cart.splice(num, 1);
    this.calculateCost();
  }

  totalCost = 0;

  private calculateCost() {
    this.totalCost = 0;
    for (const temp of this.cart) {
      this.totalCost += temp.total;
    }
  }

  placeOrder() {
    this._orderService.saveOrder(this.selectedCustomer,new Date(),
      this.totalCost,this.cart).subscribe(response=>{
    alert(response.message);
    }, error => {
      console.log(error)
    })
  }
}
