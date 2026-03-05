import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // To track if the user is registered
  const [isSuccess, setIsSuccess] = useState(false); // To track if registration was successful
  const [isLogin, setIsLogin] = useState(false); // To track if user is in login mode

  const handleRegister = (e) => {
    e.preventDefault();
    if (username.trim() && email.trim()) {
      // Simulate registration process
      setIsRegistered(true);
      setIsSuccess(true); // Set to true on successful registration

      // Display a success notification
      alert("Registered successfully!");

      // After registration, clear the fields and show login form
      setUsername("");
      setEmail("");

      // Switch to login mode
      setIsLogin(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && email.trim() && !isRegistered) {
      // Only proceed with login if the user is not registered yet
      alert("Please register first!");
    } else if (isRegistered) {
      // If already registered, login after filling the fields
      alert("Logged in successfully!");
      // Call onLogin function to simulate logging in after registration
      onLogin({ username, email });
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "Register"} Page</h2>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Register button triggers registration process */}
        {!isLogin && (
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        )}

        {/* Login button triggers login process */}
        {isLogin && (
          <button type="submit">
            Login
          </button>
        )}
      </form>

      {isSuccess && !isLogin && (
        <p className="success-message">
          Registration successful! You can now log in.
        </p>
      )}
    </div>
  );
}

export default Login;
