import { navLinks } from "../constants";
import NavItem from "./NavItem";

const NavItemList = () => {
  return navLinks.map((navLink) => (
    <NavItem
      key={navLink.id}
      id={navLink.id}
      title={navLink.title}
      icon={navLink.icon}
    />
  ));
};

export default NavItemList;
