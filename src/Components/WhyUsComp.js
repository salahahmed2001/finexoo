import React, { Fragment } from "react";
import W1Image from "../images/w1.png";
import W2Image from "../images/w2.png";
import W3Image from "../images/w3.png";
import W4Image from "../images/w4.png";

const WhyUsComp = () => {
  return (
    <Fragment>
      <section className="why-us">
        <div className="container">
          <div className="cards-choose">
            <div className="text-choose">
              <h1>
                Why Choose <span>Us</span>
              </h1>
            </div>
            <div data-aos="fade-up" className="card-choose">
              <div className="img-choose">
              <img src={W1Image} alt=""></img>
              </div>
              <h3>Expert Management</h3>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
            <div data-aos="fade-up" className="card-choose">
              <div className="img-choose">
              <img src={W2Image} alt=""></img>
              </div>
              <h3>Expert Management</h3>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
            <div data-aos="fade-up" className="card-choose">
              <div className="img-choose">
              <img src={W3Image} alt=""></img>
              </div>
              <h3>Expert Management</h3>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
            <div data-aos="fade-up" className="card-choose">
              <div className="img-choose">
              <img src={W4Image} alt=""></img>
              </div>
              <h3>Expert Management</h3>
              <p>
                Incidunt odit rerum tenetur alias architecto asperiores omnis
                cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                laborum dolores quod nisi vitae voluptate ipsa? In tempore
                voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                nesciunt ut veniam, nemo officia ullam repudiandae repellat
                veritatis unde reiciendis possimus animi autem natus
              </p>
            </div>
            <button className="btn-all">View All</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhyUsComp;
