import { NgModule } from '@angular/core';

import { ClientsDataService } from "./clients-data.service";
import { WebApiHandlerModule } from 'src/web-api-handler/web-api-handler.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';

// @NgModule({
//   imports: [
//     WebApiHandlerModule
//   ]
// })
// export class ClientsDataModule {
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule : ClientsDataModule,
//       providers: [ClientsDataService]
//     }
//   }
// }

@NgModule({
  imports: [
    WebApiHandlerModule
  ],
  providers: [ClientsDataService]
})
export class ClientsDataModule {}