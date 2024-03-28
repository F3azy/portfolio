import { Flex } from "@chakra-ui/react";
import { socialLinks } from "../constants";
import SocialLink from "./SocialLink";

const SocialLinkList = (props) => {
  return (
    <Flex {...props}>
      {socialLinks.map((socialLink) => (
        <SocialLink
          key={socialLink.id}
          icon={socialLink.icon}
          url={socialLink.url}
        />
      ))}
    </Flex>
  );
};

export default SocialLinkList;
