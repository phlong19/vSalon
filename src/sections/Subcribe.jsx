import { FaEnvelope } from "react-icons/fa6";
import AnimatedSectionHeader from "../components/AnimatedSectionHeader";

function Subcribe() {
  return (
    <div className="w-full pb-16">
      <div className="pb-6 pt-16">
        <AnimatedSectionHeader
          text="Hơn"
          color="variant"
          textHighlight="5000"
          textAfter="doanh nghiệp, chủ shop đang quản lý cửa
        hàng như thế nào?"
        >
          <br />
          <p className="px-3 pb-0 text-sm font-semibold leading-6 sm:pb-10 sm:text-base">
            Đăng ký dùng thử miễn phí 30 ngày để khám phá
          </p>
        </AnimatedSectionHeader>
      </div>
      {/* input box */}
      <div className="flex-center px-3.5">
        <div className="relative flex w-full max-w-[705px] flex-wrap justify-stretch">
          <span className="absolute left-6 top-[19px] z-50 text-xl text-primary">
            <FaEnvelope />
          </span>
          <input
            type="email"
            placeholder="Nhập mail hoặc số điện thoại của bạn"
            className="relative h-14 w-[1%] flex-auto rounded-[32px] border border-[#f2f2f2] bg-white py-3.5 pl-16 pr-40 text-base shadow-[0_9px_32px_rgba(89,92,219,0.05)]"
          />
          <button className="absolute right-1 top-1 z-50 h-[47px] w-[115px] rounded-[33px] bg-gradient-to-r from-primary to-secondary px-3 py-1.5 text-sm font-medium leading-[31px] text-white transition-shadow duration-300 hover:shadow-btn hover:shadow-primary">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subcribe;
