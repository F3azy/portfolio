import { Flex } from "@chakra-ui/react";
import { navLinks } from "../constants";
import NavItem from "./NavItem";

const NavItemList = (props) => {
  return (
    <Flex {...props}>
      {navLinks.map((navLink) => (
        <NavItem
          key={navLink.id}
          id={navLink.id}
          title={navLink.title}
          icon={navLink.icon}
        />
      ))}
    </Flex>
  );
};

export default NavItemList;
