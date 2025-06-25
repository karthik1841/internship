import React from 'react';

function RegistrationPage() {
  return (
    <div>
      <h2>Register New Admin</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
    </div>
  );
}

export default RegistrationPage;
