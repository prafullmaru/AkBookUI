import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { ClientsDataModule } from '../clients-data/clients-data.module';
import { ClientListComponent } from "./client-list.component";
import { ClientDetailsComponent } from "./client-details.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ClientsDataModule
  ],
  declarations: [ClientListComponent, ClientDetailsComponent],
})
export class ClientsModule { }
