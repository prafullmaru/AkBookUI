import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html'
})
export class PaymentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    { field: 'PaymentId', sortable: true, filter: true },
    { field: 'Amount', sortable: true, filter: true },
    { field: 'TransactionDate', sortable: true, filter: true },
    { field: 'PaidBy', sortable: true, filter: true },
    { field: 'ReceivedBy', sortable: true, filter: true, width: 400},
    { field: 'PaymentMode', sortable: true, filter: true },
    { field: 'ChequeNumber', sortable: true, filter: true},
    { field: 'IsChequeCleared', sortable: true, filter: true}
  ];

  rowData = [
      { PaymentId: 1, Amount:'75000', TransactionDate: '10-March-2021', PaidBy: 'Prafull Maru', ReceivedBy: 'Ashok Dobariya', PaymentMode:'Cash', ChequeNumber:'NA', IsChequeCleared:'NA' },
      { PaymentId: 2, Amount:'500000', TransactionDate: '12-March-2021', PaidBy: 'Dviyaraj Chudasama', ReceivedBy: 'Ashok Dobariya', PaymentMode:'Cash', ChequeNumber:'NA', IsChequeCleared:'NA' },
      { PaymentId: 3, Amount:'25000', TransactionDate: '15-March-2021', PaidBy: 'Manav Vadher', ReceivedBy: 'Ashok Dobariya', PaymentMode:'Cash', ChequeNumber:'NA', IsChequeCleared:'NA' },
      { PaymentId: 4, Amount:'250000', TransactionDate: '19-March-2021', PaidBy: 'Dolly Maru', ReceivedBy: 'Kishor Dobariya', PaymentMode:'Cheque', ChequeNumber:'0046564', IsChequeCleared:'Yes' },
  ];
}
