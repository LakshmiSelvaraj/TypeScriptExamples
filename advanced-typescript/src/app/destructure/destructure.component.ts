import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-destructure',
  templateUrl: './destructure.component.html',
  styleUrls: ['./destructure.component.css']
})
export class DestructureComponent implements OnInit{

  books: Book[];
  book1: Book;
  book2: Book;

  firstBookAuthor: string;
  firstBookTitle: string;
  firstBookRating: number;

  constructor() { 
    this.books = [];
    this.books.push({title: 'Cuckoo\'s calling', author: 'Robert Galbraith', rating: 3.5});
    this.books.push({title: 'Inferno', author: 'Dan Brown', rating: 4.5})
  }

  deconstructArray() {
    [this.book1, this.book2] = this.books;
  }

  /**
   * Deconstructing object with new variable names that exist at component level does not seem to work as demonstrated in the first commneted out line. 
   * Works fine with local variables as demonstrated in the last line.
   */
  deconstructObject() {
   // let {author: this.firstBookAuthor, title: this.firstBookTitle, rating: this.firstBookRating} = this.book1;
   let {author, title, rating} = this.book1;
   this.firstBookAuthor = author;
   this.firstBookTitle = title;
   this.firstBookRating = rating;

   let {author:secondAuthor, title: secondTitle, rating: secondRating} = this.book2;
   console.log(secondAuthor);
   console.log(secondTitle);
   console.log(secondRating);
  }

  ngOnInit() {
    this.deconstructArray();
    this.deconstructObject(); 
  }
}
