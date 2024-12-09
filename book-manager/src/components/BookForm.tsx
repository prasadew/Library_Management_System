import React, { useState } from 'react';

interface BookFormProps {
  onSubmit: (book: any) => void;
  initialData?: any;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !author.trim() || !description.trim()) {
      setError('All fields are required.');
      return;
    }

    const bookPayload = {
      ...(initialData?.id && { id: initialData.id }), // Include `id` only for editing
      title,
      author,
      description,
    };

    onSubmit(bookPayload);
  };

  return (
    <div className="container">
      <h1>{initialData ? 'Edit Book' : 'Add Book'}</h1>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>{initialData ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default BookForm;
