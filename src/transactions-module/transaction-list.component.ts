import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html'
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnDefs = [
    { field: 'TransactionId', sortable: true, filter: true },
    { field: 'BuyOrSell', sortable: true, filter: true },
    { field: 'Organization', sortable: true, filter: true },
    { field: 'Item', sortable: true, filter: true },
    { field: 'Quantity', sortable: true, filter: true },
    { field: 'Price', sortable: true, filter: true, width: 400},
    { field: 'TransactionBy', sortable: true, filter: true},
    { field: 'TransactionDate', sortable: true, filter: true}
  ];

  rowData = [
      { TransactionId: 1, BuyOrSell:'Buy', Organization: 'Quick Suppliers Group', Item: 'Raw Material', Quantity: '10kg', Price:'150', TransactionBy:'Ashok Dobariya', TransactionDate:'11-March-2021' },
      { TransactionId: 2, BuyOrSell:'Buy', Organization: 'Shyam Stationary', Item: 'Book', Quantity: '5', Price:'55', TransactionBy:'Ashok Dobariya', TransactionDate:'15-March-2021' },
      { TransactionId: 3, BuyOrSell:'Sell', Organization: 'Emery Stone', Item: 'Stone', Quantity: '100', Price:'15500', TransactionBy:'Ashok Dobariya', TransactionDate:'17-March-2021' },
      { TransactionId: 4, BuyOrSell:'Sell', Organization: 'Swastik Cotton Thread', Item: 'Yarn', Quantity: '950Kg', Price:'75000', TransactionBy:'Savan Dobariya', TransactionDate:'18-March-2021' },
      { TransactionId: 5, BuyOrSell:'Sell', Organization: 'Yogi Textile', Item: 'Yarn', Quantity: '2000', Price:'8500', TransactionBy:'Kishor Dobariya', TransactionDate:'21-March-2021' },
  ];
}
