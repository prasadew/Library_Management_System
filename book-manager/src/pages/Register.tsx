import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { registerUser } from '../services/api';


const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleRegister = async () => {
        try {
            await registerUser({ name, email, password, role }); // Include role
            alert('Registration successful');
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err: any) {
            setError(err.response?.data || 'Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <p>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
};

export default Register;
