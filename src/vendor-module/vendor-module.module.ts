import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { VendorListComponent } from './vendor-list.component';
import { VendorDetailsComponent } from './vendor-details.component';


@NgModule({
  declarations: [VendorListComponent, VendorDetailsComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  
})
export class VendorModuleModule { }