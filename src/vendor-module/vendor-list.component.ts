import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html'
})
export class VendorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    { field: 'VendorId', sortable: true, filter: true },
    { field: 'Name', sortable: true, filter: true },
    { field: 'ContactNumber', sortable: true, filter: true },
    { field: 'Address', sortable: true, filter: true, width: 400},
    { field: 'City', sortable: true, filter: true},
    { field: 'State', sortable: true, filter: true}
  ];

  rowData = [
      { VendorId: 1, Name: 'Prafullbhai Maru', ContactNumber: '8007085195', Address: 'EON IT Park, Kharadi', City:'Pune', State:'Maharashtra' },
      { VendorId: 2, Name: 'Dilipbhai Vadher', ContactNumber: '87458541321', Address: 'Sagar Row House, Varachha', City:'Surat', State:'Gujarat' },
      { VendorId: 3, Name: 'Gajendrasinh Chudasama', ContactNumber: '45456445555', Address: 'Sagar Row House, Varachha', City:'Surat', State:'Gujarat' },
  ];
}
