import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
})
export class Welcome {
  constructor(private router: Router) {}

  irHome() {
    this.router.navigate(['/home']);
  }
}
