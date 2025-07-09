import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

export default function AddUsers() {
    let navigate =useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        username: ""
    });

    const {name, username, email}= user;
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/users", user)
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border p-4 shadow rounded gx-3 gy-3 bg-light">
                    <h2 className="text-center my-4">Register User</h2>
                    <form onSubmit={(e) => {onSubmit(e)}}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder='Enter your name' value={name} onChange={onInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder='Enter your email' value={email} onChange={onInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder='Enter your username' value={username} onChange={onInputChange}/>
                    </div>
                    <div className="mb-3 align-items-">
                        <button type="submit" className="btn btn-primary mx-2">Submit</button>
                        <Link  className="btn btn-danger mx-2 " to="/">Cancel</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
