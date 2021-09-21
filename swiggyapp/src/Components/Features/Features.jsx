import React from "react";
import "./Features.css";
import img1 from "../../images/section2_img1.png";
import img2 from "../../images/section2_img2.png";
import img3 from "../../images/section2_img3.png"
const Features = () => {
  return (
    <div>
      
        <div className="features">
          <div className="container"> 
            <img
              src={img1}
              alt=""
            />
            <div className="heading">No Minimum Order</div>
            <div className="content">
              Order in for yourself or for the group, with no restrictions on
              order value
            </div>
          </div>
          <div className="container">
            <img
              src={img2}
              alt=""
            />
            <div className="heading">No Minimum Order</div>
            <div className="content">
              Order in for yourself or for the group, with no restrictions on
              order value
            </div>
          </div>
          <div className="container">
            <img
              src={img3}
              alt=""
            />
            <div className="heading">No Minimum Order</div>
            <div className="content">
              Order in for yourself or for the group, with no restrictions on
              order value
            </div>
          </div>
        </div>
   
    </div>
  );
};

export default Features;