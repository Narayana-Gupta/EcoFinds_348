import React, { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({
    username: '', email: '', password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signed up successfully!');
  };

  return (
    <div className="container card">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input value={form.username} onChange={e => setForm({...form, username: e.target.value})} required />

        <label>Email:</label>
        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />

        <label>Password:</label>
        <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
