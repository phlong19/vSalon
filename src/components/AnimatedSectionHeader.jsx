import FadeInUpContainer from "./FadeInUpContainer";

function AnimatedSectionHeader({
  center = true,
  text,
  textHighlight,
  children,
  textAfter,
  color = "primary",
}) {
  return (
    <div className="flex-center">
      <FadeInUpContainer
        className={`${center ? "text-center" : "text-left"} text-bluewood`}
        duration={0.95}
        initY={120}
      >
        <h1 className="px-4 text-[28px] font-bold leading-[34px] md:px-2 md:text-4xl md:leading-[44px]">
          {text}{" "}
          <span
            className={color === "primary" ? " text-primary" : "text-[#efc01c]"}
          >
            {textHighlight}
          </span>{" "}
          {textAfter}
        </h1>
        {children}
      </FadeInUpContainer>
    </div>
  );
}
export default AnimatedSectionHeader;
