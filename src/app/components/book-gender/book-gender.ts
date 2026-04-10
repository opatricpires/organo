import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card';
import { books } from '../../mock-books';

@Component({
  selector: 'app-book-gender',
  imports: [BookCardComponent],
  templateUrl: './book-gender.html',
  styleUrls: ['./book-gender.css'],
})
export class BookGender {
  book = books[0];
}
