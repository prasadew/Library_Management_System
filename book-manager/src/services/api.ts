import axios from 'axios';

const API_URL = 'https://localhost:7131/api/Book';

const API_URL_user = 'https://localhost:7131/api/User';


// Book API calls
export const getBooks = () => axios.get(`${API_URL}`);
export const getBookById = (id: number) => axios.get(`${API_URL}/${id}`);
export const addBook = (book: any) => axios.post(`${API_URL}`, book);
export const updateBook = (id: number, book: any) => axios.put(`${API_URL}/${id}`, book);
export const deleteBook = (id: number) => axios.delete(`${API_URL}/${id}`);

// User API calls
export const registerUser = async (user: { name: string, email: string, password: string, role: string }) => {
    return await axios.post(`${API_URL_user}/register`, user);
};

export const loginUser = async (user: { email: string, password: string }) => {
    return await axios.post(`${API_URL_user}/login`, user);
};
