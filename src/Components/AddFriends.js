import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const AddFriends = () => {
    const [form, setForm] = useState({
        name:'',
        age:'',
        email:''
    });
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(response => {
                navigate('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return (
    <div>
        <h2>AddFriend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input onChange={handleChange} name="name" id="name"/>
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <input onChange={handleChange} name="age" id="age"/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input onChange={handleChange} name="email" id="email"/>
            </div>
            <button>Submit</button>
        </form>
    </div>
)}

export default AddFriends;