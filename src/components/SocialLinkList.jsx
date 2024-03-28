import { socialLinks } from "../constants";
import SocialLink from "./SocialLink";

const SocialLinkList = () => {
  return socialLinks.map((socialLink) => (
    <SocialLink
      key={socialLink.id}
      icon={socialLink.icon}
      url={socialLink.url}
    />
  ));
};

export default SocialLinkList;
