import React from "react";
import main_img from "../../images/main_img.jfif";
import nav_logo from "../../images/nav_logo.png"
import "./Main.css";
function Main() {
  return (
    <div className="Main">
      <div className="main-left">
        <div>
          <div className="upper">
            <div className="swiggy-logo"> 
              <img
                src={nav_logo}
                alt=""
              />
            </div>
            <div className="btns-grp">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        </div>

        <div>
        <h1>Unexpected Guests?</h1>
        <h2>Order food from favourite restaurants near you.</h2>

        <div class="search">
          <div class="search-box">
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="search-inner"
            />
            <button className="locate-btn">Locate Me</button>
          </div>
          <button className="find-btn">FIND FOOD</button>
        </div>

        <h3>Popular cities in India</h3>
        <div class="cities">
          <a href="#" > Ahemdabad</a>
          <a href="#" > Kolkata</a>
          <a href="#" > Delhi</a>
          <a href="#"> Mumbai</a>
          <a href="#" > Bengaluru</a>
          <a href="#" > Hyderabad</a>
          <a href="#" > Kolkata</a>
          <a href="#" > Mumbai</a>
          <a href="#" > Pune</a>
          <a href="#" > & more</a>

        </div>
      </div>
      </div>

      <div className="main-right">
        <img height="540" width="490" src={main_img} alt="" />
      </div>
    </div>
    
  );
};

export default Main;