import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ola } from './ola/ola';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ola],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('primeiroproj');
}
