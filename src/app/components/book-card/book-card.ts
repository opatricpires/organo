import { Component, input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.css'],
})
export class BookCardComponent {

  book = input.required<Book>();

  changeFavoriteStatus(book: Book) {
    book.isFavorite = !book.isFavorite;
  }

}

// Input Properties:
// - São propriedades de um componente que podem ser configuradas por um componente pai.
// - Permitem que um componente receba dados de um componente pai e os utilize em sua lógica ou exibição.
// - São decoradas com o decorator @Input() do Angular, indicando que a propriedade pode ser configurada externamente.
// - Permitem a comunicação entre componentes, facilitando a passagem de dados e a reutilização de componentes em diferentes contextos.

// Input Signals:
// - São sinais ou eventos que um componente pode emitir para notificar um componente pai sobre uma ação ou mudança de estado.
// - Permitem que um componente filho se comunique com um componente pai, enviando informações ou notificações sobre eventos específicos.
// - São decorados com o decorator @Output() do Angular, indicando que a propriedade é um evento que pode ser emitido para o componente pai.
// - Permitem a comunicação entre componentes, facilitando a interação e a resposta a eventos em diferentes partes da aplicação.
