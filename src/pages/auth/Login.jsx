
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         email,
//         password,
//       });
//       alert(response.data);
//     } catch (error) {
//       alert('Error logging in');
//     }
//   };

//   return (
//     <div className="login-page">
//       <h1>Log in to Continue Your Learning Journey</h1>
//       <form onSubmit={handleSubmit} className="login-form">
//         <label>Email</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Log In</button>
//       </form>
//        {/* Add a "Go to Sign Up" option */}
//        <div className="signup-redirect">
//         <p>
//           Don't have an account?{' '}
//           <span
//             className="signup-link"
//             onClick={() => navigate('/auth/SignUp')}  
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
  
      // Store the token or user info in localStorage
      localStorage.setItem("userToken", response.data.token);
  
      // Show the alert
      alert(response.data.message || "Login successful");
  
      // Redirect and force a page reload if necessary
      navigate('/home', { replace: true }); // Ensure no stack is created for the Login page in history
    } catch (error) {
      alert('Error logging in');
    }
  };
  

  return (
    <div className="login-page">
      <h1>Log in to Continue Your Learning Journey</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>

      {/* "Go to Sign Up" option */}
      <div className="signup-redirect">
        <p>
          Don't have an account?{' '}
          <span
            className="signup-link"
            onClick={() => navigate('/auth/SignUp')}  // Ensure correct path for the SignUp component
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
