export interface Book {
    bookID: number;
    title: string;
    description: string;
    isbn: string;
    categoryID: number | null;
    publicationYear: string;
  }