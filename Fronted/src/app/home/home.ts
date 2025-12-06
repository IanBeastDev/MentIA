import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environment/environment'; // asegúrate de tener apiUrl en environment.ts

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  styleUrls: ['./home.css'],
})
export class Home {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  // 🔐 LOGIN — conecta con tu API Laravel
  login() {
    const datos = {
      email: this.email,
      contrasena: this.password, // importante: el backend espera "contrasena"
    };

    this.http.post(`${environment.apiUrl}/api/usuarios/login`, datos).subscribe({
      next: (res: any) => {
        alert('Inicio de sesión exitoso');
        // Guardar datos si quieres mantener sesión
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        // Redirigir
        this.router.navigate(['/user']);
      },
      error: (err) => {
        if (err.status === 404) {
          alert('❌ El usuario no está registrado');
        } else if (err.status === 401) {
          alert('🔒 Contraseña incorrecta');
        } else {
          alert('⚠️ Error al iniciar sesión');
        }
      },
    });
  }

  // 👉 Ir a registro
  irRecord() {
    this.router.navigate(['/record']);
  }
}
