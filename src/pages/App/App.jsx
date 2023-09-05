import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage'
import NoteListPage from '../NoteListPage/NoteListPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LogInForm/LoginForm';


export default function App() {
  const [user, setUser] = useState(getUser());

const [notes, setNotes] = useState([
  {text: '1'},
  {text: 'T2'},
  {text: '3'}
  ])

  return (
    <main className="App">
    {user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/notes/new" element={<NewNotePage notes={notes} setNotes={setNotes} />} />
          <Route path="/notes" element={<NoteListPage notes={notes}/>} />
          <Route path="/" />
        </Routes>
      </>
      :
      <>
        <Routes>
          <Route path="/" element={<AuthPage setUser={setUser} />} />
          <Route path="/login" element={<LoginForm setUser={setUser}/>}/>
        </Routes>
      </>
    }
  </main>
);
}