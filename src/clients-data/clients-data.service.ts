import { Injectable, NgModule } from '@angular/core';

import { WebApiHandlerService } from '../web-api-handler/web-api-handler.service';

import { Client } from './model';

@Injectable()
export class ClientsDataService { 
  constructor(
    private apiHandler: WebApiHandlerService
  ){
  }

  getClients() {
    const url = 'accounts';
    return this.apiHandler.get<Client[]>(url);
  }
}