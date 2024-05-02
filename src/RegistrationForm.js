// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import CSS styles

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData);
      setMessage(response.data.message); // Set message from server response
      // Clear form after successful registration
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      setMessage(error.response.data.message); // Set error message from server
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RegistrationForm;
