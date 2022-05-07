import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { TransactionListComponent } from "./transaction-list.component";
import { TransactionDetailsComponent } from "./transaction-details.component";

import { WebApiHandlerModule } from "../web-api-handler/web-api-handler.module";

@NgModule({
  declarations: [TransactionListComponent, TransactionDetailsComponent],
  imports: [
    WebApiHandlerModule,
    CommonModule,
    AgGridModule.withComponents([]),
  ]
})
export class TransactionsModuleModule { }
