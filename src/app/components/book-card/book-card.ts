import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCardComponent {
  book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  }
}
