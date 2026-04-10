import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { FooterComponent } from "./components/footer/footer";
import { BookListComponent } from "./components/book-list/book-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, FooterComponent, BookListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('organo');
}
