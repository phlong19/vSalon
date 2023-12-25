import { FaAngleDown } from "react-icons/fa6";

function NavItem({ item, onSetActive, active, type, onCloseNav }) {
  const variants = {
    desktop: "px-5 font-medium hover:text-primary",
    mobile: "text-left font-semibold p-0 mb-5",
  };

  const { label, link } = item;

  if (label === "Vi") {
    return (
      <li
        className={`${
          type === "desktop" ? "px-5" : "mb-5 p-0"
        } font-medium hover:text-primary`}
      >
        <button className="flex-center gap-1">
          <img src="VN-flag.svg" />
          {label}{" "}
          <span>
            <FaAngleDown />
          </span>
        </button>
      </li>
    );
  }
  return (
    <li
      className={`${active === item.label ? "text-primary" : ""} ${
        variants[type]
      }`}
    >
      <a
        href={link}
        onClick={(e) => {
          onSetActive(e.target.text);
          onCloseNav();
        }}
      >
        {label}
      </a>
    </li>
  );
}

export default NavItem;
