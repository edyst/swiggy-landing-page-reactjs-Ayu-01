import React from "react";

import "./Download.css";
import img1 from "../../images/download_img1.png";

import img2 from "../../images/download_img2.png";

import img3 from "../../images/download_img3.png";

import img4 from "../../images/download_img4.png";

 
const Download = () => {
  return (
    <div>
      <div className="Download">
        <div className="left">
          <div className="heading">Restaurants in your pocket</div>
          <div className="content">
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </div>
          <div className="btn-img">
            <a href="#" className="btn1"><img
              height="50"
              // width="100"
              src={img1}
              alt=""
            /></a>
             <a href="#" className="btn2"><img
              height="50"
              src={img2}
              alt=""
           /></a>
          </div>
        </div>
        <div className="right">
          <img
            width="380"
            height="490"
            src={img3}
            alt=""
          />
          <img
            
            width="380"
            height="490"
            src={img4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Download;