import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }

  public saveOrder(customer: Object, date: Date, totalCost: Number, items:any []): Observable<any>{
   return this.http.post('http://localhost:3001/api/v1/orderRoute/place-order',{
     customer: customer,
     date: date,
     totalCost: totalCost,
     items: items
   });
  }

}
