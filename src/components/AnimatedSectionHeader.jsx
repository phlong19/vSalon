import { motion } from "framer-motion";

function AnimatedSectionHeader({
  center = true,
  text,
  textHighlight,
  children,
}) {
  return (
    <div className="flex-center">
      <motion.div
        initial={{ opacity: 0, y: "120px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.95 }}
        className={`${center ? "text-center" : "text-left"} text-bluewood`}
      >
        <h1 className="px-4 text-[28px] font-bold leading-[34px] md:px-2 md:text-4xl md:leading-[44px]">
          {text} <span className="text-primary">{textHighlight}</span>
        </h1>
        {children}
      </motion.div>
    </div>
  );
}
export default AnimatedSectionHeader;
