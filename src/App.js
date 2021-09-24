import logo from "./logo.svg";
import "./App.css";
import { MessagingService } from "./MessagingService";
import React, { useContext, useState, useEffect, useRef } from "react";
import { cleanup } from "@testing-library/react";

const MessagingServiceContext = React.createContext();
const messagingService = new MessagingService();

function App() {
  const [loadingState, setLoadingState] = useState(true);

  const messageService = useRef(messagingService);
  useEffect(() => {
    const connectToBroker = async () => {
      await messageService.current.connect();
      setLoadingState(false);
    }
    const cleanup = () => {
      messageService.current.disconnect();
    }
    connectToBroker();
    return cleanup;
  }, [messageService]);

  if (loadingState) {
    return (<div> this is loading </div>);
  }

  return (
        <div className="App">
          <MessagingServiceContext.Provider value={messagingService}>
            <Foo />
            <p/>
            <Display />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </MessagingServiceContext.Provider>
        </div>
  );
}

function Foo(props) {
  const [msg, setMsg] = useState("");
  const messageService = useContext(MessagingServiceContext);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    messageService.publishMessage("foo", msg);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Publish something:
        <input type="text" value={msg} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function Display(props) {
  const [msg, setMsg] = useState("");
  const messageService = useContext(MessagingServiceContext);
  useEffect(() => {
    messageService.subscribeToTopic("foo", setMsg);
  }, [messageService]);

  return <div>Received message: {msg}</div>;
}

export default App;
