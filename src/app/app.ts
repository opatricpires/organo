import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { FooterComponent } from "./components/footer/footer";
import { BookListComponent } from "./components/book-list/book-list";
import { BookGender } from "./components/book-gender/book-gender";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, FooterComponent, BookListComponent, BookGender],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('organo');
}
