import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postData = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // Store the response data in localStorage
            localStorage.setItem("SIH2024", JSON.stringify(data));
            alert(`${email} signed in successfully`);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>Signin</h1>
            <form onSubmit={postData}> {/* Use onSubmit for the form */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Enter Email' 
                        value={email} 
                        onChange={(e) => { setEmail(e.target.value) }} 
                        aria-describedby="emailHelp" 
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        placeholder='Enter Password' 
                        value={password} 
                        onChange={(e) => { setPassword(e.target.value) }} 
                        className="form-control" 
                        id="exampleInputPassword1" 
                    />
                </div>

                <button type="submit" className="btn btn-warning">Submit</button> {/* Use button with type="submit" */}
                <div style={{ textAlign: "center" }}>
                    <p>If you don't have an account? <Link to='/signup' style={{ color: "black" }}>SignUp</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Signin;
