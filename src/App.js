import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/Friendslist';
import AddFriends from './Components/Addfriends';
import Logout from './Components/Logout';
import PrivateRoutes from './Components/PrivateRoute';

function App() {
  return (
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="login">Login</Link>
          <Link className="link" to="friends">Friends List</Link>
          <Link className="link" to="friends/add">Add Friends</Link>
          <Link className="link" to="logout">Logout</Link>


        </header>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/friends"  element={<FriendsList/>}/>
            <Route path="/friends/add" element={<AddFriends/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Route>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
  );
}

export default App;
