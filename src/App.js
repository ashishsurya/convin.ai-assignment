import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUsers, usersSlice } from './features/usersSlice';

function App() {

  const users = useSelector(selectUsers)

  console.log(users)

  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
