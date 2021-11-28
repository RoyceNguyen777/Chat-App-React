import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.scss';
import Login from './auth/login';
import ChatRoom from './chat/ChatRoom';
import { auth } from './firebase/config';

function App() {

  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {user ? <ChatRoom /> : <Login />}
    </div>
  );
}

export default App;
