import React, { Fragment } from "react";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Sidebar from "./Sidebar/Sidebar";
import Viewloan from "./Viewloan/Viewloan";
import Reviewloan from "./Reviewloan/Reviewloan";
import Approve from "./Approve/Approve";
import Loanagreement  from "./Loanagreement/Loanagreement";
import Loanstatus from "./Loanstatus/Loanstatus";
import Loanform from "./Loanform/Loanform";
import Viewtable from "./View/Viewtable";

function Index() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Fragment>
            <Navigation />
            <div className="layout-content">
              {" "}
              <Sidebar />
              <div className="content-section">
                <Outlet />
              </div>
            </div>
          </Fragment>
        }
      >
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/viewloan" element={<Viewloan/>} />
        <Route path="/reviewloan" element={<Reviewloan />} />
        <Route path="/approve" element={<Approve/>} />
        <Route path="/loanagreement" element={<Loanagreement />} />
        <Route path="/loanstatus" element={<Loanstatus />} />
        <Route path="/viewtable" element={<Viewtable/>} />
      </Route>
      <Route path="/loanform" element={<Loanform />} />
      
    </Routes>
  );
}

export default Index;
