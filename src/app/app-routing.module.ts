import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthContextComponent} from "./components/auth-context/auth-context.component";
import {LoginPageComponent} from "./components/auth-context/inner-items/login-page/login-page.component";
import {SignUpPageComponent} from "./components/auth-context/inner-items/sign-up-page/sign-up-page.component";
import {DashBoardComponent} from "./components/dash-board/dash-board.component";
import {CustomerContextComponent} from "./components/dash-board/components/customer-context/customer-context.component";
import {PlaceOrderComponent} from "./components/dash-board/place-order/place-order.component";

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {
    path: 'auth', component: AuthContextComponent, children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'signup', component: SignUpPageComponent}
    ]
  },
  {path:'dashboard', component: DashBoardComponent, children: [
      {path: '', redirectTo: '/dashboard/customer-management', pathMatch: 'full'},
      {path: 'customer-management', component: CustomerContextComponent},
      {path: 'place-order', component: PlaceOrderComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
