import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-record',
  templateUrl: './book-record.component.html',
  styleUrls: ['./book-record.component.css']
})
export class BookRecordComponent {
  @Input() book!: Book;

}
