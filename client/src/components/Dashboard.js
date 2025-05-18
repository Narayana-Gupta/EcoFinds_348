import React, { useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState({ username: 'aishu123', email: 'aishu@example.com' });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container card">
      <h2>User Dashboard</h2>
      <label>Username:</label>
      <input name="username" value={user.username} onChange={handleChange} />

      <label>Email:</label>
      <input name="email" value={user.email} onChange={handleChange} />

      <button onClick={() => alert("Profile updated!")}>Save Changes</button>
    </div>
  );
}
