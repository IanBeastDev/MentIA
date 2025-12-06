import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  private apiUrl = `${environment.apiUrl}/api/contactos`;

  constructor(private http: HttpClient) {}

  obtenerContactos(userId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }

  crearContacto(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
