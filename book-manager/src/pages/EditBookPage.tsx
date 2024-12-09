import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBookById, updateBook } from '../services/api';

const EditBookPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookById(Number(id));
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdateBook = async (updatedBook: any) => {
    try {
      await updateBook(Number(id), updatedBook);
      navigate('/');
    } catch (error) {
      console.error('Error updating book', error);
    }
  };

  return book ? <BookForm onSubmit={handleUpdateBook} initialData={book} /> : <p>Loading...</p>;
};

export default EditBookPage;
