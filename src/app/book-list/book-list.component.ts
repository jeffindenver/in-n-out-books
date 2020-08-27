/**
 * Title: book-list.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/26/2020
 * Description: book-list component
 */

 import { Component, OnInit } from '@angular/core';
 import { BooksService } from '../books.service';
 import { IBook } from '../book.interface';
 import { MatDialog } from '@angular/material/dialog';
 import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Array<IBook> = [];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe( bookList => {

      for (let entry in bookList) {
        if (bookList.hasOwnProperty(entry)) {
          let l_authors = [];
          if (bookList[entry].details.authors) {
            l_authors = bookList[entry].details.authors.map( author => {
              return author.name;
            });
          }

          let l_isbn = bookList[entry].details.isbn_13 ? bookList[entry].details.isbn_13[0] : bookList[entry].details.isbn_10[0];
          let l_title = bookList[entry].details.title;
          let l_description = bookList[entry].details.subtitle ? bookList[entry].details.subtitle : "n/a";
          let l_numOfPages: number = bookList[entry].details.number_of_pages;

          this.books.push({
            isbn: l_isbn,
            title: l_title,
            authors: l_authors,
            description: l_description,
            numOfPages: l_numOfPages
          });
        }
      }
    });
  }

  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);
    const diaglogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: "800px"
    });

    console.log(this.book);

    diaglogRef.afterClosed().subscribe(result => {
      if (result === "confirm") {
        this.book = null;
      }
    });
  }

  ngOnInit(): void {
  }

}
