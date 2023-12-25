import { useState } from "react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import StickyHeader from "./StickyHeader";

import { navLinks } from "../constant";

function Header() {
  const [active, setActive] = useState(navLinks[0].label);

  return (
    <StickyHeader>
      <Logo />
      <DesktopNav active={active} onSetActive={setActive} />
      <MobileNav active={active} onSetActive={setActive} />
    </StickyHeader>
  );
}

export default Header;
