import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

import AnimatedSectionHeader from "./AnimatedSectionHeader";

import { services } from "../constant";

function MobileServices() {
  const [active, setActive] = useState(0);

  function handleOpen(id) {
    setActive(active === id ? 0 : id);
  }

  return (
    <div id="service" className="mt-10 block pb-8 lg:hidden">
      <AnimatedSectionHeader text="Hệ sinh thái" textHighlight="vSalon" />
      {/* content */}

      <div className="px-4">
        {services.map((s, i) => (
          <div key={i} onClick={() => handleOpen(s.id)}>
            <div className="relative z-20 my-5 rounded-lg bg-[#f2f2f2] px-3.5 pb-2 pt-3">
              <div className="flex items-center">
                <img src={s.icon_active} alt="active-icon" />
                <span className="pl-3 text-base font-bold text-[#333]">
                  {s.nav}
                </span>
                <span className="absolute right-6">
                  <FaAngleDown />
                </span>
              </div>
            </div>
            {/* content */}
            <AnimatePresence mode="wait">
              {active === s.id && (
                <motion.div
                  className="z-10 overflow-hidden pt-6"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <img src={s.img} alt="content-img" />
                  <h5 className="pt-5 text-xl font-bold text-bluewood">
                    {s.heading}
                  </h5>
                  <br />
                  <ul className="ml-[18px] list-disc">
                    {s.content.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileServices;
