import React from "react";
import "./Cont.scss";
import background_img from "./../../../../assets/Background/background.jpg";
const Packages = () => {
  return (
    <section id="cont" style={{ backgroundImage: `url(${background_img})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand_header">
              <h2>Contact</h2>
              <p>
                The Forester / <span>Contact</span>
              </p>
              <div className="explore_now">
                <a href="#">back to homepage</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
