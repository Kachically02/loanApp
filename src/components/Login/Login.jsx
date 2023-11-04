import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate=useNavigate()
  return (
    <div className="Login">
      <h1>LOGIN</h1>
      <form>
        <div>
          <label className="form-label">Email</label>
          <br />
          <input
            className="form"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label className="form-label">Password</label>
          <br />
          <input
            className="form"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <input type="checkbox" />
          <label for="checkbox"> Remember Login?</label>
          <br></br>
        </div>
        <Link>Forget Password?</Link>
      </form>
      <h2>Don't have an account? <button onClick={()=>navigate("/register")}>Register Here</button></h2>
    </div>
  );
}

export default Login;
