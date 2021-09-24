import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MessagingServiceContext } from "../../App";


function Login({ onLogin }) {
  const [name, setName] = useState("");
  const messagingService = useContext(MessagingServiceContext);
  
  
  const handleClick = () => {  
    onLogin(name)
    createUser(name)    
  }

  const createUser = (name) => {
    const userId = uuidv4()
    const user = {
      "userId": userId,
      "name": name,
      "message": ''
    }
    console.log(user)
  }

  return (
    <div className="App">
     <div>
       <label>Name</label>
     </div>
     <div>
       <input value={ name } type="text" onChange={e => setName(e.target.value)}></input>
     </div>
     <div>
       <button onClick={handleClick}>Login</button>
     </div>
    </div>
  );
}

export default Login;
