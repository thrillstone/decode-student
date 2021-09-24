import { useState } from "react";
import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: flex-start;
  margin-bottom: 2vh;
`
const TextField = styled.input`
  width: 80vw;
  padding: 4px;
  font-size: 2vh;
  font-family: 'Poppins';
  height: 3vh;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

const Button = styled.button`
  border-radius: 4px;
  background: #E8067B;
  width: 80vw;
  color: white;
  outline: none;
  height: 4vh;
  font-size: 2vh;
  border: none;
`

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    onLogin(name);
  };

  return (
    <div className="App">
      <img alt="Logo" src="/Logo.png"></img>
      <Field>
        <label>Username</label>
        <div>
          <TextField
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
        </div>
      </Field>
      <Field>
        <label>Password</label>
        <div>
          <TextField
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </div>
      </Field>
      <div>
        <Button onClick={handleClick}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
