import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import MobileServices from "../components/MobileServices";
import { services } from "../constant";

function Services() {
  const [active, setActive] = useState(1);
  const isNotMobile = useMediaQuery({
    query: "(min-width: 500px)",
  });

  return isNotMobile ? (
    <div className="w-full pb-10">
      {/* heading select */}
      <div className="m-[0_auto] mt-[3%] flex w-full px-3.5 md:flex-wrap md:justify-evenly md:gap-11 lg:max-w-[1200px] lg:flex-nowrap lg:justify-between">
        {services.map((s) => (
          <motion.div
            key={s.id}
            className={`${
              active === s.id
                ? "opacity-100 before:w-full"
                : "opacity-50 before:w-0"
            } flex-center relative cursor-pointer flex-col pb-4 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:origin-left before:rounded-[3px] before:bg-primary before:transition-all before:duration-500 before:ease-out before:content-['']`}
            onClick={() => setActive(s.id)}
          >
            <img
              className={`${
                active === s.id
              } h-14 w-14 object-cover object-center transition-all duration-300 ease-out`}
              src={active === s.id ? s.icon_active : s.icon}
              alt="logo-nav"
            />
            <p
              className={`${
                active === s.id
                  ? "font-semibold text-primary"
                  : "font-normal text-[#333]"
              } pt-2 text-center font-[15px] leading-[18px]`}
            >
              {s.nav}
            </p>
          </motion.div>
        ))}
      </div>
      {/* content */}
      <AnimatePresence mode="popLayout">
        {services.map(
          (s) =>
            active === s.id && (
              <motion.div
                key={s.id}
                className={`${
                  active === s.id ? "sm:block lg:flex" : "hidden"
                } m-[0_auto] w-full max-w-[1200px] overflow-hidden sm:pt-[5%] lg:p-3.5 lg:pt-[60px]`}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: "200px" },
                }}
                transition={{ duration: 0.8 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src={s.img}
                  alt="img"
                  initial={{ opacity: 0, y: "400px" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  className="sm:m-auto sm:my-10 sm:h-[407px] sm:w-[690px] lg:m-0 lg:h-auto lg:w-auto"
                />
                {/* list */}
                <motion.div
                  className="w-full self-center sm:px-10 lg:max-w-[50%] lg:basis-1/2 lg:pl-14 lg:pr-3.5"
                  initial={{ opacity: 0, y: "70px" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h4 className="mb-1 text-xl font-bold text-bluewood sm:leading-[150%] md:leading-[30px] ">
                    {s.heading}
                  </h4>
                  <ul className="ml-[18px] list-disc">
                    {s.content.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </div>
  ) : (
    <MobileServices />
  );
}

export default Services;
