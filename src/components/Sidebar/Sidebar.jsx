import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar-content'>
    <NavLink to="/viewtable" >View Loan</NavLink>
    <NavLink to="/reviewloan">Review Loan </NavLink>
    <NavLink to="/approve">Approve Loan </NavLink>
    <NavLink to="/loanagreement">Generate Agreement</NavLink>
    <NavLink to="/loanstatus">Update Loan Status</NavLink>
    </div>
    
    </div>
  )
}

export default Sidebar