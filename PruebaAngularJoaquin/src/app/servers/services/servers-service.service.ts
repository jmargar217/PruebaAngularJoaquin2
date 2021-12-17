import { Injectable } from '@angular/core';
import { Server } from '../interfaces/servidor.interface';

@Injectable({
  providedIn: 'root'
})
export class ServersServiceService {

  private _servers:Server[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServer():Server[]{
    return [...this._servers];
  }
}
