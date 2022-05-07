import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html'
})
export class ReportDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnDefs = [
    { field: 'ClientId', sortable: true, filter: true },
    { field: 'OrganizationName', sortable: true, filter: true },
    { field: 'ContactPerson', sortable: true, filter: true },
    { field: 'ContactNumber', sortable: true, filter: true },
    { field: 'Address', sortable: true, filter: true, width: 400},
    { field: 'City', sortable: true, filter: true},
    { field: 'State', sortable: true, filter: true}
  ];

  rowData = [
      { ClientId: 1, OrganizationName:'Utpal Food Caterers', ContactPerson: 'Prafullbhai Maru', ContactNumber: '8007085195', Address: 'EON IT Park, Kharadi', City:'Pune', State:'Maharashtra' },
      { ClientId: 2, OrganizationName:'Dhara Coldrinks', ContactPerson: 'Dilipbhai Vadher', ContactNumber: '87458541321', Address: 'Sagar Row House, Varachha', City:'Surat', State:'Gujarat' },
      { ClientId: 3, OrganizationName:'Chudasama Institute of Tech', ContactPerson: 'Gajendrasinh Chudasama', ContactNumber: '45456445555', Address: 'Sagar Row House, Varachha', City:'Surat', State:'Gujarat' },
  ];
}
