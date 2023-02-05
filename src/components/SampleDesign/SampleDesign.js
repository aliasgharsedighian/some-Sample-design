import React from "react";
import "./SampleDesign.css";
import { SampleDesignData } from "./SampleDesignData";
import { Link } from "react-router-dom";

function SampleDesign() {
  return (
    <section className="sample-container">
      <div className="sample-title">
        <span className=""></span>
        <h5>Sample convert figma Design</h5>
        <span className=""></span>
      </div>
      <div className="samples">
        {SampleDesignData.map((sample) => {
          return (
            <div key={sample.id} className="sample-area">
              <div className="sample-img">
                <Link to={sample.link}>
                  <img src={sample.img} alt="" />
                </Link>
              </div>
              <div className="sample-text">
                <Link to={sample.link}>
                  <p>{sample.title}</p>
                </Link>
                <span>{sample.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SampleDesign;
