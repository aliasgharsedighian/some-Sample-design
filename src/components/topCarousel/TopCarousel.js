import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../Menu/Menu";
import "./TopCarousel.css";

function TopCarousel() {
  return (
    <div className="top-carousel z-40">
      <div className="top-carousel2">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div className="relative bg-img1">
            <img
              loading="lazy"
              src="http://localhost:3000/images/banner1.jpg"
              alt=""
            />
            <h2>Hair Studio</h2>
          </div>
          <div className="bg-img2">
            <img
              loading="lazy"
              src="http://localhost:3000/images/banner2.jpg"
              alt=""
            />
            <h2>Hair Studio</h2>
          </div>
          <div className="bg-img3">
            <img
              loading="lazy"
              src="http://localhost:3000/images/banner3.jpg"
              alt=""
            />
            <h2>Hair Studio</h2>
          </div>
        </Carousel>
      </div>
      <Menu />
    </div>
  );
}

export default TopCarousel;
