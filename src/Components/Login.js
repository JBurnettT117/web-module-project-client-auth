import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [ cred, setCred ] = useState({
        username:"",
        password:""
    });

    const handleChange = (event) => {
        setCred({
            ...cred,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                navigate('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input onChange={handleChange} name="username" id="username"/>
          </div>
  
          <div>
            <label htmlFor="password">Password:</label>
            <input onChange={handleChange} name="password" type="password" id="password"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
}

  export default Login;