import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServersServiceService } from './services/servers-service.service';



@NgModule({
  declarations: [
    ServersComponent
  ],
  exports:[
    ServersComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ServersServiceService
  ]
})
export class ServersModule { }
