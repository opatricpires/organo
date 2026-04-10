// BOOK INTERFACE
export interface Book {
  title: string;
  author: string;
  isFavorite: boolean;
  gender: Gender;
  image: string;
}

export interface Gender {
  id: string;
  value: string;
  livros: Book[];
}
