import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { benefits } from "../constant";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function Carousel() {
  return (
    <Swiper
      className="touch-manipulation transition-all delay-0 duration-[250ms]"
      modules={[Navigation]}
      loop={true}
      loopAdditionalSlides={1}
      spaceBetween={10}
      slidesPerView={3}
      centeredSlides
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      }}
    >
      {Array.from({ length: 3 }).map((_) =>
        benefits.map((benefit, i) => (
          <SwiperSlide
            key={i}
            className="mb-16 mr-2.5 mt-1.5 h-[374px] w-[322px] scale-90 rounded-[10px] bg-white opacity-70 shadow-[0_0_9px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out"
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
      <div className="absolute top-0 flex h-full w-full items-center justify-between">
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
