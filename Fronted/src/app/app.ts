import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // corregido styleUrl → styleUrls
})
export class App {
  protected readonly title = signal('MentIA');
}
