import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { addBook } from '../services/api';

const AddBookPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddBook = async (book: any) => {
    try {
      await addBook(book);
      navigate('/');
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  return <BookForm onSubmit={handleAddBook} />;
};

export default AddBookPage;
