import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { WebApiHandlerService } from "./web-api-handler.service";


@NgModule({
  providers: [WebApiHandlerService],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ]
})
export class WebApiHandlerModule { }
