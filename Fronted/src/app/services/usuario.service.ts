import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/api/usuarios`;

  constructor(private http: HttpClient) {}

  registrar(data: any): Observable<any> {
    // 👇 Asegúrate de usar POST
    return this.http.post(`${this.apiUrl}/registrar`, data);
  }
}
