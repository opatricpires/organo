import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.css'],
})
export class BookCardComponent {

  changeFavoriteStatus() {
    this.book.isFavorite = !this.book.isFavorite;
  }

  book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isFavorite: false,
    image: "https://m.media-amazon.com/images/I/71OiLUfqjqL._AC_UF1000,1000_QL80_.jpg",
  }
}
