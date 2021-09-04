import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private _service: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this._service.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response => {
      alert('Success..')
      this.router.navigateByUrl('/dashboard').catch(isNavigated=>{

      }).catch(navigateError=>{

      });
      console.log(response)
    }, error => {
      console.log(error)
    })
  }
}
