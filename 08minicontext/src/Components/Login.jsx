import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  // Correctly use the useContext hook to get 'setuser'
  const { setuser } = useContext(UserContext);

  const handlesubmit = (e) => { // Remember to accept the event object 'e'
    e.preventDefault(); // Prevent default form submission behavior
    setuser({ username, password });
    // You might want to clear the fields or give feedback here
    setusername(''); // Optional: Clear username field
    setpassword(''); // Optional: Clear password field
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password" 
        value={password} 
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;