import { Component, OnInit } from '@angular/core';
import { Client } from '../clients-data/model';
import { ClientsDataService } from '../clients-data/clients-data.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  columnDefs: ColDef[] = [];

  constructor(private clientService: ClientsDataService) {
  }

  ngOnInit(): void {
    this.configureGrid();
    this.clientService.getClients().subscribe(data => this.clients = data);
  }

  private configureGrid() {
    this.columnDefs = [
      { field: 'AccountId', sortable: true, filter: true },
      { field: 'AccountTypeId', sortable: true, filter: true },
      { field: 'OrganizationName', sortable: true, filter: true },
      { field: 'Gstin', sortable: true, filter: true },
      { field: 'PersonName', sortable: true, filter: true },
      { field: 'MobileNumber', sortable: true, filter: true },
      { field: 'PAN', sortable: true, filter: true },
      { field: 'AddrressLine1', sortable: true, filter: true, width: 400 },
      { field: 'AddrressLine2', sortable: true, filter: true, width: 400 },
      { field: 'Pincode', sortable: true, filter: true },
      { field: 'City', sortable: true, filter: true },
      { field: 'State', sortable: true, filter: true },
      { field: 'ModifiedBy', sortable: true, filter: true },
      { field: 'ModifiedOn', sortable: true, filter: true }
    ];
  }
}