import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState('');

  const handleClick = () => {
    onLogin(name);
  };

  return (
    <div className="App">
      <div>
        <label>Name</label>
      </div>
      <div>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}

export default Login;
