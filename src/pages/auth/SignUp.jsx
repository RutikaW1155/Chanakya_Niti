// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './SignupPage.css';

// function SignUp() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
//   const [stream, setStream] = useState('');
//   const [errorMessage, setErrorMessage] = useState(''); // To display error messages
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !age || !stream) {
//       setErrorMessage('All fields are required.');
//       return;
//     }

//     const signupData = { name, email, password, age, stream };

//     try {
//       const response = await fetch('http://localhost:5000/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signupData),
//       });

//       if (response.ok) {
//         alert('Successfully Signed Up');
//         setName('');
//         setEmail('');
//         setPassword('');
//         setAge('');
//         setStream('');

//         // Redirect to login page after successful sign-up
//         navigate('/auth/login');
//       } else {
//         const errorMessage = await response.text();
//         setErrorMessage('Error: ' + errorMessage); // Display the error message
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Failed to sign up. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-page">
//       <h1>Sign up to Connect with Peers</h1>
//       <form onSubmit={handleSubmit} className="signup-form">
//         {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        
//         <label>Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <label>Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <label>Age</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//         />
//         <label>Stream of Study</label>
//         <select value={stream} onChange={(e) => setStream(e.target.value)} required>
//           <option value="">Select Stream</option>
//           <option value="Science">Science</option>
//           <option value="Arts">Arts</option>
//           <option value="Commerce">Commerce</option>
//         </select>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SignupPage.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [stream, setStream] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To display error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !age || !stream) {
      setErrorMessage('All fields are required.');
      return;
    }

    const signupData = { name, email, password, age, stream };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        alert('Successfully Signed Up');
        setName('');
        setEmail('');
        setPassword('');
        setAge('');
        setStream('');

        // Redirect to login page after successful sign-up
        navigate('/auth/login');
      } else {
        const errorMessage = await response.text();
        setErrorMessage('Error: ' + errorMessage); // Display the error message
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign up to Connect with Peers</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
        
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label>Stream of Study</label>
        <select value={stream} onChange={(e) => setStream(e.target.value)} required>
          <option value="">Select Stream</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="Commerce">Commerce</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>

      {/* Add link to Login page */}
      <div className="login-link">
        <p>Already have an account? <Link to="/auth/login">Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
