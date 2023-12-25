import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

import Logo from "./Logo";
import NavItem from "./NavItem";
import Action from "./Action";

import { navLinks } from "../constant";
import { useClickOutside } from "../hooks/useClickOutside";

function MobileNav({ active, onSetActive }) {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  const ref = useClickOutside(close);

  return (
    <div className={`${show && "bg-blur"} text-end xl:hidden`}>
      <button className="h-16 text-3xl" onClick={open}>
        <FaBars />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            ref={ref}
            className="fixed bottom-0 right-0 top-0 z-40 w-[380px] bg-black/70 bg-white text-lg leading-6"
            initial={{ x: "380px" }}
            animate={{ x: "0px" }}
            transition={{ duration: 0.25 }}
            exit={{ x: "380px" }}
          >
            {/* header */}
            <div className="flex-between border-b border-black/20 py-4 pl-4">
              <Logo />
              <button className="h-16 text-3xl" onClick={close}>
                <FaXmark />
              </button>
            </div>
            {/* links */}
            <ul className="pl-4 pt-4">
              {navLinks.map((item, index) => (
                <NavItem
                  type="mobile"
                  key={index}
                  active={active}
                  item={item}
                  onSetActive={onSetActive}
                  onCloseNav={close}
                />
              ))}
            </ul>
            <Action />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
