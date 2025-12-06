import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './record.html',
  styleUrls: ['./record.css']
})
export class Record {
  usuario = '';
  email = '';
  contrasena = ''; // 👈 sin "ñ"

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  irHome() {
    this.router.navigate(['/home']);
  }

 registrar() {
  const data = {
    usuario: this.usuario,
    email: this.email,
    contrasena: this.contrasena
  };

  this.usuarioService.registrar(data).subscribe({
    next: (res) => {
      alert('Usuario registrado correctamente');
      console.log(res);
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error(err);
      alert('Error al registrar el usuario');
    }
  });
}
}