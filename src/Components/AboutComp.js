import React from "react";
import { Fragment } from "react";
import AboutImage from "../images/about-img.png";

const AboutComp = () => {
  return (
    <Fragment>
      <section  className="about-us">
        <div className="text-about-us">
          <h1>
            About <span>Us</span>
          </h1>
          <p>
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </p>
        </div>
        <div className="container">
          <div className="img-text-about">
            <div data-aos="fade-right" className="img-about">
              <img src={AboutImage} alt=""></img>
            </div>
            <div data-aos="fade-left" className="text-about">
              <h2>We Are Finexo</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </p>
              <p>
                Molestiae odio earum non qui cumque provident voluptates,
                repellendus exercitationem, possimus at iste corrupti officiis
                unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                ab omnis quasi expedita.
              </p>
              <button className="btn-all">View All</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutComp;
