import FadeInUpContainer from "../components/FadeInUpContainer";

function Trial() {
  return (
    <div
      id="free-trial"
      className="relative h-60 w-full overflow-hidden bg-free-trial"
    >
      <FadeInUpContainer className="mx-auto w-full max-w-1k2">
        <h4 className="p-[39px_15px_25px_15px] text-center text-xl font-bold leading-150 text-white sm:p-[40px_50px_30px_50px] sm:text-[22px] lg:p-[39px_95px_40px_95px] lg:text-4xl">
          Đăng ký dùng thử phần mềm ngay hôm nay!
        </h4>
        <div className="flex-center w-full">
          <button className="h-12 w-[215px] cursor-pointer rounded-[36px] border-2 border-solid border-white bg-primary px-5 py-[9px] text-base font-medium leading-7 text-white transition-shadow duration-300 hover:shadow-[0_0_10px_#fff]">
            Đăng ký ngay
          </button>
        </div>
      </FadeInUpContainer>
    </div>
  );
}

export default Trial;
