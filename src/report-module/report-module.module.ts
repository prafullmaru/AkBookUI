import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import {ReportDetailsComponent} from './report-details.component'

@NgModule({
  declarations: [ReportDetailsComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ]
})
export class ReportModuleModule { }
