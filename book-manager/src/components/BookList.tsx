import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/api';
import { useNavigate } from 'react-router-dom';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      <button className="add" onClick={() => navigate('/add')}>Add New Book</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>
                <button className="edit" onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
