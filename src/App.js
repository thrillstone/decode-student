import './App.css';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';
import Loading from './components/loading/Loading';
import ClassroomSelector from './components/classroom/ClassroomSelector';
import Classroom from './components/classroom/Classroom';
import { MessagingService } from "./MessagingService";
import React, { useState, useEffect, useRef } from "react";
import FullScreen from './components/styles/FullScreen';

export const MessagingServiceContext = React.createContext();
const messagingService = new MessagingService();

function App() {
  const [loadingState, setLoadingState] = useState(true);
  const [user, setUser] = useState(null);
  const [nav, setNav] = useState(null);
  const [classroom, setClassroom] = useState(null);
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
    return (<div> <Loading></Loading> </div>);
  }
  

  function handleLogin(name) {
    setUser(name);
  }

  function handleNavClick(nav) {
    setNav(nav);
  }

  function handleClassroomSelected(nav) {
    setClassroom(nav);
  }

  if (!user) {
    return (
      <FullScreen>
        <Login onLogin={handleLogin}></Login>
      </FullScreen>
    );
  } else if (!nav) {
    return (
      <div>
        <h1>Welcome {user} </h1>
        <Landing onNavClick={handleNavClick}></Landing>
      </div>
    )
  } else {
    if (!classroom) {
      return (
          <ClassroomSelector onClasroomSelected={handleClassroomSelected}></ClassroomSelector>
      )
    } else {
      return (
        <MessagingServiceContext.Provider value={messagingService}>
          <Classroom></Classroom>
        </MessagingServiceContext.Provider>
      )
    }
  }
}

export default App;
