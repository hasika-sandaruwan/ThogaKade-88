import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './components/auth-context/auth-context.component';
import { LoginPageComponent } from './components/auth-context/inner-items/login-page/login-page.component';
import { SignUpPageComponent } from './components/auth-context/inner-items/sign-up-page/sign-up-page.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { TopBarComponent } from './components/dash-board/items/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { CustomerContextComponent } from './components/dash-board/components/customer-context/customer-context.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SaveCustomerPageComponent } from './components/dash-board/components/customer-context/save-customer-page/save-customer-page.component';
import { UpdateCustomerPageComponent } from './components/dash-board/components/customer-context/update-customer-page/update-customer-page.component';
import { DeleteCustomerPageComponent } from './components/dash-board/components/customer-context/delete-customer-page/delete-customer-page.component';
import { SearchCustomerPageComponent } from './components/dash-board/components/customer-context/search-customer-page/search-customer-page.component';
import { AllCustomerPageComponent } from './components/dash-board/components/customer-context/all-customer-page/all-customer-page.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PlaceOrderComponent } from './components/dash-board/place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DashBoardComponent,
    TopBarComponent,
    CustomerContextComponent,
    SaveCustomerPageComponent,
    UpdateCustomerPageComponent,
    DeleteCustomerPageComponent,
    SearchCustomerPageComponent,
    AllCustomerPageComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
