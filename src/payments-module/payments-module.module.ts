import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { PaymentsListComponent } from "./payments-list.component";
import { PaymentDetailsComponent } from "./payment-details.component";

@NgModule({
  declarations: [PaymentsListComponent, PaymentDetailsComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ]
})
export class PaymentsModuleModule { }
