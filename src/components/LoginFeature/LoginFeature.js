import React, { useState } from 'react';
import './LoginFeature.css';

function LoginFeature({ setShowLogin = () => {}, setShowSignUp = () => {}, onSuccess = () => {} }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return alert(' Invalid email');
    if (password.length < 6) return alert(' Password must be at least 6 characters');

    const userData = { email, name: email.split('@')[0] };
    alert("Login Successful!\nEmail: " + email);

    onSuccess(userData);
    setShowLogin(false);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Welcome Back!</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => { setShowLogin(false); setShowSignUp(true); }}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default LoginFeature;
