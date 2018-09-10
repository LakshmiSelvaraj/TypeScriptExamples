import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {
  books: Book[];

  constructor() {
    this.books = [];
    this.books.push({title: 'I know why the caged bird sings', author: 'Maya Angelou', rating: 4});
   }

   spreadArray() {
    let localBooks: Book[] = [{title:'',author:'',rating:1}, ...this.books];
    console.log("Spread Array");
    for(let book of localBooks) {
      console.log(book);
    }
   }

   spreadObject() {
     let book = {
       ...this.books[0],
       rating: 3
     }
     console.log(`Spread object: ${book.title} rating changed from ${this.books[0].rating} to ${book.rating}`);
   }

  ngOnInit() {
    this.spreadArray();
    this.spreadObject();
  }

}
