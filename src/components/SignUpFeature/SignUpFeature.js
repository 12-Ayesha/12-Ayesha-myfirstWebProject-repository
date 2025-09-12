import React, { useState } from 'react';
import './SignUpFeature.css';

function SignUpFeature({ setShowSignUp = () => {}, setShowLogin = () => {}, onSuccess = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return alert('❌ Invalid email');

    if (password.length < 6) return alert('❌ Password must be at least 6 characters');

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) return alert('❌ Mobile number must be 10 digits');

    if (!dob) return alert('❌ Date of Birth is required');

    alert("✅ Signup Successful!\nEmail: " + email);

    setShowSignUp(false);
    setShowLogin(true);

    onSuccess({ email, name: email.split('@')[0] });
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-box" onSubmit={handleSignUp}>
        <h2>Create Account</h2>

        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input type="tel" placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} required />
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} required />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => { setShowSignUp(false); setShowLogin(true); }}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default SignUpFeature;
