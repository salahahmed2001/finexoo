import React, { Fragment } from "react";

import TeamImage1 from '../images/team-1.jpg'
import TeamImage2 from '../images/team-2.jpg'
import TeamImage3 from '../images/team-3.jpg'
import TeamImage4 from '../images/team-4.jpg'
import { FaFacebook,FaInstagram,FaLinkedinIn,FaTwitter, FaYoutube } from "react-icons/fa";

const TeamComp = () => {
  return (
    <Fragment>
      <section className="our-team">
        <div className="text-team">
          <h1>Our  <span>Team</span></h1>
        </div>
        <div className="container">
          <div className="cards-team">
            <div data-aos="fade-down-right" className="card-team">
              <div className="img-team">
                <img src={TeamImage1} alt=""></img>
              </div>
                <h3>Joseph Brown</h3>
                <h4>Marketing Head</h4>
                <div className="icon-team">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon" />
                <FaLinkedinIn  className="icon"/>
                <FaInstagram  className="icon"/>
                <FaYoutube  className="icon"/>
                </div>
            </div>
            <div data-aos="fade-up" className="card-team">
              <div className="img-team">
                <img src={TeamImage2} alt=""></img>
              </div>
                <h3>Nancy White</h3>
                <h4>Marketing Head</h4>
                <div className="icon-team">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon" />
                <FaLinkedinIn  className="icon"/>
                <FaInstagram  className="icon"/>
                <FaYoutube  className="icon"/>
                </div>
            </div>
            <div data-aos="fade-up" className="card-team">
              <div className="img-team">
                <img src={TeamImage3} alt=""></img>
              </div>
                <h3>Earl Martinez</h3>
                <h4>Marketing Head</h4>
                <div className="icon-team">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon" />
                <FaLinkedinIn  className="icon"/>
                <FaInstagram  className="icon"/>
                <FaYoutube  className="icon"/>
                </div>
            </div>
            <div data-aos="fade-down-left" className="card-team">
              <div className="img-team">
                <img src={TeamImage4} alt=""></img>
              </div>
                <h3>Josephine Allard</h3>
                <h4>Marketing Head</h4>
                <div className="icon-team">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon" />
                <FaLinkedinIn  className="icon"/>
                <FaInstagram  className="icon"/>
                <FaYoutube  className="icon"/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TeamComp;
