import React from 'react'
import "./navigation.css"
import { useNavigate, Link } from 'react-router-dom'

function Navigation() {
  const navigate=useNavigate()
  return (
    <div className='navigation'>
   <Link className="Link" to="/" >LOANAPP</Link> 
    <div>
    <h2 onClick={()=>navigate("/loanform")}>Apply for Loan</h2>
    
    </div>

    <button onClick={()=>navigate("/login")}>LOGIN</button>
    </div>
   


  )
}

export default Navigation