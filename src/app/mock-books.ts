import { Book } from "./components/book-card/book";

export const books: Book[] = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isFavorite: false,
    gender: {
      id: 'romance',
      value: 'Romance',
      livros: []
    },
    image: "https://m.media-amazon.com/images/I/71OiLUfqjqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isFavorite: false,
    gender: {
      id: 'romance',
      value: 'Romance',
      livros: []
    },
    image: "https://m.media-amazon.com/images/I/81OdwZG5F-L._AC_UF1000,1000_QL80_.jpg",
  },
]
