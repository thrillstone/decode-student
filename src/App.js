import './App.css';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';
import Loading from './components/loading/Loading';
import ClassroomSelector from './components/classroom/ClassroomSelector';
import Classroom from './components/classroom/Classroom';
import { MessagingService } from "./MessagingService";
import React, { useState, useEffect, useRef } from "react";
import FullScreen from './components/styles/FullScreen';
import { v4 as uuidv4 } from "uuid";

export const MessagingServiceContext = React.createContext();
export const UserContext = React.createContext();
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
    createUser(name);
    messagingService.publishMessage("user", user);
  }
  
  function createUser(name) {
    const createUuid = uuidv4();
    setUser({
      userId: createUuid,
      name: name,
    });
  };

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
      <UserContext.Provider value={user}>
        <div>
          <h1>Welcome {user.name} </h1>
          <Landing onNavClick={handleNavClick}></Landing>
        </div>
      </UserContext.Provider>
    )
  } else {
    if (!classroom) {
      return (
          <ClassroomSelector onClasroomSelected={handleClassroomSelected}></ClassroomSelector>
      )
    } else {
      return (
        <UserContext.Provider value={user}>
          <MessagingServiceContext.Provider value={messagingService} >
            <Classroom      ></Classroom>
          </MessagingServiceContext.Provider>
        </UserContext.Provider>
      )
    }
  }
}

export default App;
