import React from "react";
import Image from "../../assets/image.svg"
import {Link} from "react-dom"
import "./home.css"

function Home() {
  return (
    <div className="Home">
      <div>
        <h1>HELLO,</h1>
        <p>
          Are you at the middle of a Project or want to build a Project but  ran
          out of cash.<br/> your solution is here!. Just signup with us and have
          access  to any amount <br/> of cash that you need at a very low interest
          rate.
        </p>
      </div>
      <div>
      <img src={Image} alt=""/>
      </div>
    </div>
  );
}

export default Home;
