import { motion } from "framer-motion";

import { useWindowWidth } from "../hooks/useWindowWidth";
import AnimatedSectionHeader from "../components/AnimatedSectionHeader";

function getBackgroundImage(width) {
  if (width <= 415) {
    return `url('./app/app-mobile.png')`;
  } else if (width <= 768) {
    return `url('./app/app-tablet.png')`;
  } else {
    return `url('./app/app.png')`;
  }
}

function MobileApp() {
  const width = useWindowWidth();

  return (
    <div
      id="mobileapp"
      className="w-full overflow-hidden bg-no-repeat pb-14"
      style={{
        backgroundImage: getBackgroundImage(width),
      }}
    >
      <motion.div className="max-w-1k2 mx-auto w-full">
        <div className="flex w-full justify-start px-3.5 pt-10 text-center md:w-1/2 md:text-left lg:pt-20">
          <div>
            <AnimatedSectionHeader
              text="Ứng dụng quản lý salon miễn phí"
              textHighlight="trên điện thoại"
              center={false}
            />
            <br />
            <p className="leading-150 px-3.5 text-base font-medium text-[#4a6069] md:p-0  md:text-lg md:leading-[22px]">
              Quản lý thuận tiện, cập nhật kịp thời với ứng dụng dành cho mobile
              và tablet
            </p>
          </div>
        </div>
        {/* buttons */}
        <div className="w-[60%] px-3.5 pt-28 md:flex md:gap-1.5 lg:pt-[114px]">
          <span className="cursor-pointer">
            <a href="?">
              <img
                src="./app/appstore.png"
                alt="appstore"
                className="h-9 w-[125px] md:h-auto md:w-auto"
              />
            </a>
          </span>
          <br />
          <span className="cursor-pointer">
            <a href="?">
              <img
                src="./app/googleplay.png"
                alt="gg-play"
                className="h-9 w-[125px] md:h-auto md:w-auto"
              />
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default MobileApp;
