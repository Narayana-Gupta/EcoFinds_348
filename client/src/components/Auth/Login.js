import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login clicked: ${email}`);
    // TODO: Implement auth logic
  };

  return (
    <div className="container card">
      <h2>Login to EcoFinds</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input 
          type="email" 
          required 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="you@example.com"
        />
        <label>Password:</label>
        <input 
          type="password" 
          required 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}
