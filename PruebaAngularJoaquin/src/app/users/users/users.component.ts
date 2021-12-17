import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioServiceService } from '../services/usuario-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {


  get lista():Usuario[]{
    return this.servicioUsuario.usuarios;
  }

  constructor(private servicioUsuario:UsuarioServiceService) {
    this.servicioUsuario.getUsuarios();
   }

  ngOnInit(): void {
  }



}
