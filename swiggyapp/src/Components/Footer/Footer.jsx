import './footer.css'
import React from 'react'

import btn1 from "../../images/download_img1.png";
import btn2 from "../../images/download_img2.png";
import swiggy_logo from "../../images/swiggy_logo.png"
import cities from "../../data/cities";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Cities from './Cities';
 
function Footer() {
    
    return (
        <footer  className="footer">
           

            <div class="footer-1">
                <div>
                    <h4>COMPANY</h4>
                    <a href="#">About us</a>
                    <a href="#">Team</a>
                    <a href="#">Careers</a>
                    <a href="#">Swiggy Blog</a>
                    <a href="#">Blug Bounty</a>
                    <a href="#">Swiggy Super</a>
                    <a href="#">Swiggy Corporate</a>
                    <a href="#">Swiggy Instamart </a>
                </div>
                <div>
                    <h4>CONTACT</h4>
                    <a href="#">Help & Support </a>
                    <a href="#">Partner with us</a>
                    <a href="#">Ride with us</a>
                    
                </div>
                <div>
                    <h4>LEGAL</h4>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Refund & Cancellation</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Offer Terms</a>
                    <a href="#">Phising & Fraud</a>
                </div>

                <div className="btns">
                <a href="#" className="btn1"><img
              height="50"
              // width="100"
              src={btn1}
              alt=""
            /></a>
             <a href="#" className="btn2"><img
              height="50"
              src={btn2}
              alt=""
           /></a>
                </div>
               
            </div>






            <hr />
            <div className="footer-2">
            <h4>WE DELIVER TO</h4>
            <div className="footer-2-in">
               
                <div>
            {cities.slice(0,5).map((city) => (
            <Cities city={city}/>
          ))}
          </div>
          <div>
            {cities.slice(5,10).map((city) => (
            <Cities city={city}/>
          ))}
          </div>

          <div>
            {cities.slice(10,15).map((city) => (
            <Cities city={city}/>
          ))}
          </div>

          <div>
            {cities.slice(15,20).map((city) => (
            <Cities city={city}/>
          ))}
          </div>

          <div>
            {cities.slice(20,25).map((city) => (
            <Cities city={city}/>
          ))}
          </div>
            </div>

            </div>
           <hr />
            <div className="footer-3">
              <div>
              <a href="#"><img height="50" className="swiggy-logo"  src={swiggy_logo} alt=""/ ></a>  
              </div>

              <div>
                  <p>© 2021 Swiggy</p>
                  </div>

                  <div className="logos">
                      <a href="#"><FaFacebookF /></a>
                      <a href="#">< FaPinterest /></a>
                      <a href="#">< FaInstagram /></a>
                      <a href="#">< FaTwitter /></a>
                      
                 </div>

            </div>
        </footer>
    );
}

export default Footer;