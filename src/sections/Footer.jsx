import {
  FaEnvelope,
  FaFacebookF,
  FaLocationDot,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import FadeInUpContainer from "../components/FadeInUpContainer";

function Footer() {
  return (
    <footer className="relative bg-[image:url('./footer-bg.png')] text-white">
      <div className="mx-auto flex w-full max-w-1k2 flex-wrap px-3.5 pb-14 pt-8">
        <FadeInUpContainer duration={0.75} className={"pb-9 pl-3.5 sm:pl-11"}>
          <img src="./vsalon-footer.png" alt="footer logo" />
        </FadeInUpContainer>
        <div className="md:flex-between">
          <FadeInUpContainer>
            <h3 className="relative pb-10 text-[28px] font-medium before:absolute before:bottom-8 before:left-[1%] before:h-[3px] before:w-9 before:rounded-[3px] before:bg-primary before:content-['']">
              Giới thiệu
            </h3>
            <p className="pb-8 md:pb-14">
              vSalon – Giải pháp điện toán đám mây quản lý spa, salon… đáp ứng
              nhu cầu về quản trị vận hành và chăm sóc khách hàng trong lĩnh vực
              làm đẹp. Hệ thống được xây dựng đem đến sự chuyên nghiệp và trải
              nghiệm dịch vụ tốt nhất.
            </p>
            <div className="flex pb-8">
              <span className="flex-center mr-6 h-8 w-8 cursor-pointer rounded-[50%] border border-white">
                <FaFacebookF />
              </span>
              <span className="flex-center mr-6 h-8 w-8 cursor-pointer rounded-[50%] border border-white">
                <FaYoutube />
              </span>
            </div>
          </FadeInUpContainer>
          <FadeInUpContainer duration={0.75}>
            <h3 className="relative pb-10 text-[28px] font-medium before:absolute before:bottom-8 before:left-[1%] before:h-[3px] before:w-9 before:rounded-[3px] before:bg-primary before:content-['']">
              Liên kết
            </h3>
            <p className="cursor-pointer pb-4">Điều khoản bảo mật</p>
            <p className="cursor-pointer pb-4">Chính sách bảo hành</p>
            <p className="cursor-pointer pb-4">Hình thức thanh toán</p>
          </FadeInUpContainer>
          <FadeInUpContainer duration={0.75}>
            <h3 className="relative pb-10 text-[28px] font-medium before:absolute before:bottom-8 before:left-[1%] before:h-[3px] before:w-9 before:rounded-[3px] before:bg-primary before:content-['']">
              Liên hệ
            </h3>
            <p className="pb-3">
              <b>Công ty Cổ phần Công nghệ vSalon</b>
            </p>
            <p className="pb-3">
              <b>MST:</b> 0108x4y0zz
            </p>
            <div className="flex">
              <span className="mr-3.5 mt-1 text-base">
                <FaLocationDot />
              </span>
              <p>
                Tầng 4, số 84 Tô Vĩnh Diện, Phường Khương Trung, Quận Thanh
                Xuân, Thành phố Hà Nội, Việt Nam.
              </p>
            </div>
            <div className="flex">
              <span className="mr-3.5 mt-1 text-base">
                <FaPhone />
              </span>
              <p>0987.xxx.xxx</p>
            </div>
            <div className="flex">
              <span className="mr-3.5 mt-1 text-base">
                <FaEnvelope />
              </span>
              <p>Support@vSalon.vn</p>
            </div>
          </FadeInUpContainer>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 h-10 w-full bg-white">
        <p className="text-center text-sm font-medium leading-10 text-bluewood">
          Copyright © 2024 <span className="text-primary">vSalon</span> . All
          rights reserved.
        </p>
      </div>
      <img
        src="./robot.svg"
        alt="chat bot"
        className="fixed bottom-[42px] right-3.5 z-[999] cursor-pointer"
      />
      <a href="#" className="fixed bottom-[132px] right-6 z-[999]">
        <img src="./back-to-top.png" alt="back to top" />
      </a>
    </footer>
  );
}

export default Footer;
