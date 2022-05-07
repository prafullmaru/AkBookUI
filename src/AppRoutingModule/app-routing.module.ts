import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsModule } from "../clients/clients.module";
import { ClientListComponent } from "../clients/client-list.component";

import { VendorListComponent } from '../vendor-module/vendor-list.component';
import { VendorModuleModule } from '../vendor-module/vendor-module.module';

import { TransactionsModuleModule } from "../transactions-module/transactions-module.module";
import { TransactionListComponent } from "../transactions-module/transaction-list.component";

import { PaymentsListComponent } from "../payments-module/payments-list.component";
import { PaymentsModuleModule } from "../payments-module/payments-module.module";

import { ReportModuleModule } from "../report-module/report-module.module";
import { ReportDetailsComponent } from "../report-module/report-details.component";

const routes: Routes = [
  { path: 'clients', component: ClientListComponent},
  { path: 'vendors', component: VendorListComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'payments', component: PaymentsListComponent },
  { path: 'reports', component: ReportDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ClientsModule, VendorModuleModule, TransactionsModuleModule, PaymentsModuleModule, ReportModuleModule]
})
export class AppRoutingModule { }