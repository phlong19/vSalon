import { motion } from "framer-motion";

function FadeInUpContainer({ children, initY = 200, duration = 1, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: `${initY}px` }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeInUpContainer;
