import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public signUp(
    name: string, contact:string, email:string, password: string
  ):Observable<any>{
    return this.http.post('http://localhost:3001/api/v1/userRoute/register',{
      name,contact,email,password
    });
  }

}
