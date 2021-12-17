import { Component, Input, OnInit } from '@angular/core';
import { nuevoUsuario } from '../interfaces/crearUsuario.interface';
import { UsuarioServiceService } from '../services/usuario-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {
  nombre:string = '';
  email:string = '';

  constructor(private servicioUsuario:UsuarioServiceService) { }

  ngOnInit(): void {
  }

  addUser():void{
    let usuario:nuevoUsuario = {
      name: this.nombre,
      email: this.email
    }
    this.servicioUsuario.addUser(usuario).subscribe(datos=>{
      console.log(datos);
    });
  }


}
