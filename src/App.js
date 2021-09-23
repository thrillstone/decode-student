import { useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import Landing from './components/landing/Landing';
import ClassroomSelector from './components/classroom/ClassroomSelector';
import Classroom from './components/classroom/Classroom';


function App() {
  const [user, setUser] = useState(null);
  const [nav, setNav] = useState(null);
  const [classroom, setClassroom] = useState(null);

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
      <Login onLogin={handleLogin}></Login>
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
        <Classroom></Classroom>
      )
    }
  }
}

export default App;
