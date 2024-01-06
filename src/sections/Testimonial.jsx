import Slider from "@ant-design/react-slick";
import "swiper/css";

import { FaQuoteLeft } from "react-icons/fa6";
import AnimatedSectionHeader from "../components/AnimatedSectionHeader";

import { feedbacks } from "../constant";
import FadeInUpContainer from "../components/FadeInUpContainer";

function Testimonial() {
  return (
    <div className="w-full bg-[image:url('./testimonial.png')] bg-no-repeat pb-9">
      <FadeInUpContainer className="pb-5 pt-9 md:pt-10 lg:pt-16">
        <AnimatedSectionHeader
          text="Lắng nghe cảm nhận của khách hàng về"
          textHighlight="vSalon"
        >
          <br />
          <p className="relative px-2 pb-5 text-center text-lg font-medium leading-150 text-bluewood before:absolute before:bottom-1 before:left-[34%] before:h-[3px] before:w-32 before:rounded-[3px] before:bg-primary before:content-[''] sm:before:left-[42%]">
            Sự hài lòng của khách hàng chính là thành công lớn nhất của chúng
            tôi
          </p>
        </AnimatedSectionHeader>
      </FadeInUpContainer>
      {/* content */}
      <Slider
        dots
        customPaging={() => <button className="before:!content-none"></button>}
        arrows={false}
        slidesToShow={3}
        draggable
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {feedbacks.map((f, i) => (
          <div key={i}>
            <div className="mx-auto my-3.5 mb-6 min-h-[549px] w-[360px] rounded-[10px] bg-white px-3.5 pt-10 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:z-10 hover:scale-105 md:mb-[30px] lg:mb-11">
              {/* heading with avt, name & role */}
              <div className="relative m-auto w-4/5 before:absolute before:-bottom-3 before:h-[1px] before:w-full before:bg-[repeating-linear-gradient(to_right,#3bb54a_0,#3bb54a_6px,transparent_7px,transparent_11px)] before:content-['']">
                <img src={f.avt} alt="avt-img" className="mx-auto h-40 w-40" />
                <h5 className="pt-2 text-center text-lg font-bold uppercase leading-6 text-primary">
                  {f.name}
                </h5>
                <p className="pt-1 text-center text-base font-medium text-[#afaeae]">
                  {f.role}
                </p>
              </div>
              {/* content */}
              <div className="mt-7 px-6">
                <span className="text-3xl leading-none text-[#cecccc]">
                  <FaQuoteLeft />
                </span>
                <p className="mt-2.5 px-2 pb-5 text-center">{f.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
