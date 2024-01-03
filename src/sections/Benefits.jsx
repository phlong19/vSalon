import Carousel from "../components/Carousel";
import AnimatedSectionHeader from "../components/AnimatedSectionHeader";

function Benefits() {
  return (
    <div className="bg-[#fafafa] pt-10">
      <AnimatedSectionHeader text="Lợi ích khi sử dụng" textHighlight="vSalon">
        <p className="p-[8px_39px_24px_8px] text-base font-medium leading-6 md:p-[0_8px_40px_8px] md:text-xl">
          Hãy để chúng tôi đồng hành cùng thành công của bạn
        </p>
      </AnimatedSectionHeader>

      <div className="mx-auto w-full max-w-[1100px] overflow-hidden">
        <Carousel />
      </div>
    </div>
  );
}

export default Benefits;
