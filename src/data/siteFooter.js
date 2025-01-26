import bg from "@/images/backgrounds/footer-v1-bg.jpg";
import bg2 from "@/images/backgrounds/footer-v2-bg.jpg";
import arrow from "@/images/icon/right-arrow.png";
import logo from "@/images/resources/footer-logo.png";

export const socials2 = [
  {
    id: 1,
    icon: "fab fa-facebook",
    href: "https://www.facebook.com/share/1AGVZ72Tst/?mibextid=wwXIfr",
  },
  {
    id: 2,
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/elevated_designs.co?igsh=MW9jcnhxcXhwcTYzbQ%3D%3D&utm_source=qr",
  },

];

const footerData = {
  title: "Subscribe our newsletter to get \n the latest news & updates.",
  arrow,
  logo,
  bg,
  bg2,
  address: "Fairfax VA",
  checkText: "I agree to the Privacy Policy.",
  email: "habash.omarrr@gmail.com",
  phone: "7192376871",
  phoneHref: "7192376871",
  callText: "Schedule a free quote. \n or call us at",
  socials: socials2,
  links: [
    {
      id: 1,
      text: "Flooring",
      href: "#",
    },
    {
      id: 2,
      text: "Wood Floor",
      href: "#",
    },
    {
      id: 3,
      text: "Woodhard",
      href: "#",
    },
    {
      id: 4,
      text: "Tiles setup",
      href: "#",
    },
    {
      id: 5,
      text: "Carpet Setup",
      href: "#",
    },
    {
      id: 6,
      text: "Contact us",
      href: "/contact",
    },
    {
      id: 7,
      text: "Member",
      href: "/team",
    },
    {
      id: 8,
      text: "Our Project",
      href: "/portfolio",
    },
    {
      id: 9,
      text: "About Company",
      href: "/about",
    },
    {
      id: 10,
      text: "News Update",
      href: "/blog",
    },
  ],
  year: new Date().getFullYear(),
  bottomList: [
    {
      id: 1,
      text: "About Site",
      href: "/about",
    },
  ],
};

export default footerData;
