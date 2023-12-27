import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../components/Button";
import { banners } from "../constant";
import { useWindowWidth } from "../hooks/useWindowWidth";

const getBackgroundImage = (index, width) => {
  if (width <= 395) {
    return `url('./banner/banner${index}-mobile.jpg')`;
  } else if (width <= 768) {
    return `url('./banner/banner${index}-tablet.jpg')`;
  } else {
    return `url('./banner/banner${index}.jpg')`;
  }
};

function Banner() {
  const width = useWindowWidth();

  return (
    <Slider arrows={0} draggable>
      {banners.map((item, index) => (
        <div key={index}>
          <div
            style={{
              backgroundImage: getBackgroundImage(index + 1, width),
            }}
            className="min-h-[544px] bg-no-repeat"
          >
            <div className="m-0 overflow-hidden p-2 text-bluewood sm:mx-[1%] sm:mb-[41px] md:mb-[110px] lg:ml-[45px] lg:mr-[150px] xl:mx-[286px] 2xl:mx-[392px]">
              <h1 className="mr-[12%] p-[41px_32px_32px_13px] text-[22px] font-bold leading-[150%] sm:mt-[41px] sm:p-[126px_15%_32px_15px] sm:text-[38px] lg:mr-0 lg:mt-[130px] lg:p-[0_8px_50px_8px] xl:p-[0_30%_2%_0] 2xl:p-[0_45%_2%_0]">
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
