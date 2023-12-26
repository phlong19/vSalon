import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../components/Button";
import { banners } from "../constant";

function Banner() {
  return (
    <Slider arrows={0} draggable>
      {banners.map((item, index) => (
        <div key={index}>
          {" "}
          {/* wrap in another div to prevent react-slick override inline styles */}
          <div
            style={{
              backgroundImage: `url(${item.img})`,
            }}
            className={`min-h-[554px] ${
              item.img.includes("banner1") ? "bg-[15%]" : "bg-center"
            } bg-no-repeat`}
          >
            <div className="banner">
              <h1 className="banner-text">
                {item.text}{" "}
                <span className="text-primary">{item.highlight}</span>{" "}
                {item.textAfter}
              </h1>
              <Button to="#free-trial">Dùng thử miễn phí</Button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
