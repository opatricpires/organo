import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { FooterComponent } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
