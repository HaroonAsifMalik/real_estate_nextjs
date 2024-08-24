import { Link } from "react-scroll";

const NavigationLinks = ({ links, linkClass, onLinkClick}) => (
  <>
    {links.map((link, index) => (
      <Link
        key={index}
        to={link.href}
        smooth={true}
        duration={1000}
        className={`${linkClass} cursor-pointer`} 
        onClick={onLinkClick}
      >
        {link.label}
      </Link>
    ))}
  </>
);

export default NavigationLinks;
