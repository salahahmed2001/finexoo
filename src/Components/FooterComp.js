import React, { Fragment } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <Fragment>
      <footer  className="footer">
        <div data-aos="fade-up" className="container">
        <div className="address">
          <h1>Address</h1>
          <span>
            <FaLocationArrow className="icon-span" /> Location
          </span>
          <span>
            <FaPhone className="icon-span" /> Call +01 1234567890
          </span>
          <span>
            <IoMdMail  className="icon-span" /> mail@domain.com
          </span>
          <div className="icon-addres">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="info">
          <h1>Info</h1>
          <p>
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful
          </p>
        </div>
        <div className="links">
          <h1>Links</h1>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Services">Services</Link></li>
            <li><Link to="WhyUs">Why Us</Link></li>
            <li><Link to="Team">Team</Link></li>
          </ul>
        </div>
        <div className="subscribe">
          <h1>Subscribe</h1>
          <input placeholder="Enter Email"/>
          <button className="btn-all btn-subscribe">Subscribe</button>
        </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterComp;
