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

@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DashBoardComponent,
    TopBarComponent,
    CustomerContextComponent,
    SaveCustomerPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
