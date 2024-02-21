import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jwt.sulla.hu/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = "/termekek";
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center mt-5">
      <input type="text" placeholder="Username" className="form-control mb-3 w-25 " value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="form-control mb-3 w-25" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
