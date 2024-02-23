import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  displayedColumns: string[] = ['bookID', 'title', 'description', 'isbn', 'publicationYear'];

  books: Book[] = [
    {
      bookID: 1,
      title: "best seller",
      description: "n/a",
      isbn: "123j",
      categoryID: null,
      publicationYear: "0001-01-01T00:00:00"
    }
  ];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books = data,
      error: (e) => console.error(e)
    });
  }
}
