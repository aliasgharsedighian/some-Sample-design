import React, { useEffect, useState } from "react";
import "./Collections.css";
import { CollectionsData } from "./CollectionsData";

function Collections() {
  const [images, setImages] = useState(CollectionsData);
  const [selected, setSelected] = useState(images.map((u) => u.image1));

  useEffect(() => {
    setMainImg();
    console.log();
  }, []);

  const setMainImg = () => {};

  function addMainImg() {}
  console.log(images);
  function changeImg(input) {
    // setSelected(input);
  }
  return (
    <section className="collections-container">
      <span className="circle-top"></span>
      <div className="collections shadow-2xl">
        <div className="collection-title">
          <div className="title">
            <h3>Popular Collections</h3>
          </div>
          <div className="collection-tag">
            <a href="#">Profile</a>
            <a href="#">New York</a>
            <a href="#">Relaxing</a>
            <a href="#">Person</a>
            <a href="#">Fashion</a>
          </div>
        </div>
        <div className="popular-image-container">
          {images.map((collect) => {
            return (
              <div key={collect.id} className="popular-images">
                <div className="img-area">
                  <div className="large-img shadow-xs">
                    <img src={collect.image1} alt="" />
                  </div>
                  <div className="small-img">
                    <img
                      onClick={changeImg(collect.image2)}
                      src={collect.image2}
                      alt=""
                    />
                    <img src={collect.image3} alt="" />
                    <img src={collect.image4} alt="" />
                  </div>
                  <div className="tag">
                    <span>{collect.tag}</span>
                    <div className="view-count">
                      <img src="images/popular image/img.png" alt="" />
                      <p>{collect.view}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <span className="circle-bottom"></span>
    </section>
  );
}

export default Collections;
