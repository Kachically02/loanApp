import React from "react";
import "./form.css";
import { useLoan } from "../hook";


function Loanform() {
  const { inputs, handleChange, addTasks } = useLoan();
  console.log(inputs)
  return (
    <div className="form-container">
      <div className="form">
        <h1>Fill the form below to apply for loan</h1>
        <form onSubmit={addTasks}>
          <div>
            <label className="label">First Name</label>
            <br />
            <input
              type="text"
              value={inputs.firstName}
              onChange={(e)=>handleChange("firstName",e.target.value)}
              name="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="label">Last Name</label>
            <br />
            <input
              type="text"
              value={inputs.lastName}
              onChange={(e)=>handleChange("lastName",e.target.value)}
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label className="label">Email</label>
            <br />
            <input
              type="text"
              value={inputs.email}
              onChange={(e)=>handleChange("email",e.target.value)}
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="label">Phone Number</label>
            <br />
            <input
              type="number"
              value={inputs.phoneNumber}
              onChange={(e)=>handleChange("phoneNumber",e.target.value)}
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="label">Contact Address</label>
            <br />
            <input
              type="text"
              value={inputs.contactAddress}
              onChange={(e)=>handleChange("contactAddress",e.target.value)}
              name="contactAddress"
              placeholder="Enter your residential address"
            />
          </div>
          <div>
            <label className="label">Select Amount</label>
            <br />
            <select>
              <option>Choose Amount</option>
              <option>10,000</option>
              <option>50,000</option>
              <option>100,000</option>
              <option>500,000</option>
              <option>1,000,000</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Loanform;
