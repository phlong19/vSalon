import { motion } from "framer-motion";

function Benefits() {
  return (
    <div className="bg-[#fafafa] pt-10">
      <div className="flex-center">
        <motion.div
          initial={{ opacity: 0, y: "40px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 1.5 }}
          className="text-center text-bluewood"
        >
          <h1 className="px-4 text-[28px] font-bold leading-[34px] md:px-2 md:text-4xl md:leading-[44px]">
            Lợi ích khi sử dụng <span className="text-primary">vSalon</span>
          </h1>
          <p className="p-[8px_39px_24px_8px] text-base font-medium leading-6 md:p-[0_8px_40px_8px] md:text-xl">
            Hãy để chúng tôi đồng hành cùng thành công của bạn
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Benefits;
