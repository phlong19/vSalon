import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { benefits } from "../constant";
import { useWindowWidth } from "../hooks/useWindowWidth";

import "swiper/css";
import "swiper/css/navigation";

function getLength(width) {
  if (width > 950) return 3;
  return 1;
}

function Carousel() {
  const width = useWindowWidth();

  return (
    <Swiper
      className="touch-manipulation lg:h-[500px] transition-all delay-0 duration-[250ms]"
      modules={[Navigation, Pagination]}
      loop={true}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className} opacity-100 mx-2 rounded-xl bg-[#d2d0d9] max-w-3 w-3 h-3 transition-all duration-300 ease-linear"></button>`;
        },
      }}
      breakpoints={{
        1: {
          slidesPerView: 1,
          navigation: { enabled: false },
          pagination: { enabled: true },
        },
        720: {
          slidesPerView: "auto",
          slidesPerGroup: 2,
          slidesPerGroupSkip: 2,
          loopAdditionalSlides: -1,
          loopAddBlankSlides: false,
          centeredSlides: false,
          pagination: { enabled: true },
        },
        950: {
          slidesPerView: 3,
          loopAdditionalSlides: 1,
          spaceBetween: 10,
          centeredSlides: true,
          pagination: { enabled: false },
          navigation: { enabled: true },
          initialSlide: 3,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
        },
      }}
    >
      {Array.from({ length: getLength(width) }).map((_) =>
        benefits.map((benefit, i) => (
          <SwiperSlide
            key={i}
            className="mb-16 ml-[10%] mt-1.5 h-[374px] scale-90 rounded-[10px] bg-white opacity-100 shadow-[0_0_9px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out md:ml-[6%] lg:ml-0 lg:mr-2.5 lg:opacity-70"
          >
            <div>
              <div className="m-auto mb-5 max-w-[160px] pt-11">
                <img src={benefit.img} alt="logo" className="h-[170px]" />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-primary">
                  {benefit.heading}
                </h4>
                <p className="px-[30px] pb-10 pt-5">{benefit.content}</p>
              </div>
            </div>
          </SwiperSlide>
        )),
      )}
      <div className="absolute top-0 hidden h-full w-full items-center justify-between lg:flex">
        <div className="custom-prev z-50">
          <img src="./benefit/prev.png" alt="prev" />
        </div>
        <div className="custom-next z-50">
          <img src="./benefit/next.png" alt="next" />
        </div>
      </div>
    </Swiper>
  );
}

export default Carousel;
