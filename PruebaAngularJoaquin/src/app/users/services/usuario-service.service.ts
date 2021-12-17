import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { nuevoUsuario } from '../interfaces/crearUsuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private _usuario:Usuario[]=[];
  private url = "http://localhost:3000/users";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  get usuarios():Usuario[]{
    return[...this._usuario];
  }
  constructor(private http:HttpClient) {

  }

  getUsuarios(){
    this.http.get<Usuario[]>(this.url).subscribe(datos=>{
      this._usuario = datos;
    })

  }

  addUser(user:nuevoUsuario):Observable<nuevoUsuario>{
    return this.http.post<nuevoUsuario>(this.url,user,this.httpOptions);
  }
}
