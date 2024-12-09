import React from 'react';

interface BookDetailProps {
  book: any;
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookDetail;
