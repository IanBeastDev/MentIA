import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-red-apoyo',
  imports: [],
  templateUrl: './red-apoyo.html',
  styleUrl: './red-apoyo.css',
})
export class RedApoyo {
  constructor(private router: Router) {}

  irHome() {
    this.router.navigate(['/home']);
  }
  irRoutines() {
    this.router.navigate(['/routines']);
  }
  irComunidad() {
    this.router.navigate(['/comunidad']);
  }    
  irRedApoyo() {
    this.router.navigate(['/red-apoyo']);
  }  
  irUser() {
    this.router.navigate(['/user']);
  }   
}
