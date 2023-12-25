import Action from "./Action";
import NavItem from "./NavItem";
import { navLinks } from "../constant";

function DesktopNav({ active, onSetActive }) {
  return (
    <div className="xl:flex-between -mx-4 hidden flex-wrap py-4">
      <ul className="-mx-4 flex flex-wrap">
        {navLinks.map((item, index) => (
          <NavItem
            type="desktop"
            key={index}
            active={active}
            item={item}
            onSetActive={onSetActive}
          />
        ))}
      </ul>
      <Action />
    </div>
  );
}

export default DesktopNav;
