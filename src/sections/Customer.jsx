import { motion } from "framer-motion";
import FadeInUpContainer from "../components/FadeInUpContainer";

function Customer() {
  return (
    <div className="relative z-0 h-[397px] w-full overflow-hidden bg-[image:url('/total/bannerkhachhang.jpg')]">
      <FadeInUpContainer
        duration={0.75}
        className={"mx-auto w-full max-w-1k2 text-center"}
      >
        <div className="px-2 pb-8 pt-[87px] drop-shadow-[8px_8px_0_#d9eac2] filter">
          <img src="./total/5k.png" alt="5000-customers" />
        </div>
        <h2 className=" px-3.5 text-lg font-bold text-primary md:leading-150 lg:text-2xl">
          KHÁCH HÀNG ĐÃ SỬ DỤNG VSALON <br />
          SỰ HÀI LÒNG CỦA KHÁCH HÀNG CHÍNH LÀ THÀNH CÔNG LỚN NHẤT CỦA CHÚNG TÔI
        </h2>
        {/* bubble */}
        <motion.img
          src="./total/bubble2.png"
          className="absolute left-[10%] top-[40%] -z-[1]"
        />
        <motion.img
          src="./total/bubble2.png"
          className="absolute left-1/2 top-[46%] -z-[1]"
        />
        <motion.img
          src="./total/bubble3.png"
          className="absolute right-[22%] top-[70%] -z-[1]"
        />
        <motion.img src="./total/bubble3.png" />
        <motion.img src="./total/bubble2.png" />
      </FadeInUpContainer>
    </div>
  );
}

export default Customer;
