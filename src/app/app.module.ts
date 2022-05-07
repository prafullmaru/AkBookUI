import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from '../AppRoutingModule/app-routing.module';
import { AppComponent } from './app.component';
import { VendorModuleModule } from '../vendor-module/vendor-module.module';
import { TransactionsModuleModule } from '../transactions-module/transactions-module.module';
import { PaymentsModuleModule } from "../payments-module/payments-module.module"; // ControlModule (DropDown Component)
import { ReportModuleModule } from "../report-module/report-module.module";

VendorModuleModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    VendorModuleModule,
    TransactionsModuleModule,
    PaymentsModuleModule,
    ReportModuleModule
    //ControlModule (DropDown)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
