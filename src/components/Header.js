import { LOGO_URL } from "../utils/constants";
import { useEffect, useState} from "react";

const Header = () => {

  const[btnName,setBtnName] = useState("Log In");
  useEffect(() => {
    console.log("useEffect called")
  },[btnName]);
  
    
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL}
           />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login-btn" 
            onClick={() =>
            {
               btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In")

            }}
            >{btnName}
            </button>

          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;