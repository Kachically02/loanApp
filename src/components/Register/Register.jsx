import React from "react";
import "./register.css"
import{useNavigate} from "react-router-dom"

function Register() {
  const navigate=useNavigate()
  return (
    <div className="Register">
      <h1>Register Now!</h1>
      <p>Provide your informations in th fields below to register:</p>
      <form className="form">
        <div>
          <label>First Name</label> <br />
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label>Last Name</label> <br />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label>Email</label> <br />
          <input type="text" name="email" placeholder="Enter your Email" />
        </div>
        <div>
          <label>Permanent Address</label> <br />
          <input
            type="text"
            name="address"
            placeholder="Enter your Permanent Home address"
          />
        </div>
        <div>
          <label>contact Address</label> <br />
          <input
            type="text"
            name="address"
            placeholder="Enter your Residential address"
          />
        </div>
        <div>
          <label>Phone Number</label> <br />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Enter phone number(e.g +234 000 000 000)"
          />
        </div>
        <div>
          <label>Choose Password</label> <br />
          <input
            input
            type="password"
            id="psw"
            name="psw"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label>Confirm Password</label> <br />
          <input
            input
            type="password"
            id="psw"
            name="psw"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            placeholder="Confirm your password"
          />
        </div>
        <button>Submit</button>
      </form>
      <h2>Already have an account? <button onClick={()=>navigate("/login")}>Login</button></h2>
    </div>
  );
}

export default Register;
