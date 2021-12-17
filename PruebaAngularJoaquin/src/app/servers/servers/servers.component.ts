import { Component, OnInit } from '@angular/core';
import { Server } from '../interfaces/servidor.interface';
import { ServersServiceService } from '../services/servers-service.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  get lista():Server[]{
    return this.servicioServer.getServer();
  }

  constructor(private servicioServer:ServersServiceService) { }


  ngOnInit(): void {
  }



}
