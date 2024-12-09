import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/edit-book/:id" element={<EditBookPage />} />
      <Route path="/add" element={<AddBookPage />} />
      <Route path="/edit/:id" element={<EditBookPage />} />
      </Routes>
    </Router>
  );
};

export default App;
