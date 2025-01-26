import bg from "@/images/backgrounds/page-header-img2.jpg";
import bg2 from "@/images/backgrounds/page-header-img3.jpg";
import logo from "@/images/resources/logo-1.png";
import logo3 from "@/images/resources/logo-2.png";
import logo2 from "@/images/resources/mobilemenu_logo.png";

export const servicesNavItems = [

  { id: 4, name: "Floor Refinishing", href: "/services-single-2" },
  { id: 5, name: "Luxury Vinyl Plank", href: "/services-single-2" },
];

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    // subNavItems: [
    //   {
    //     id: 1,
    //     name: "Home One",
    //     href: "/",
    //   },
    //   {
    //     id: 2,
    //     name: "Home Two",
    //     href: "/index-2",
    //   },
    //   {
    //     id: 3,
    //     name: "Header Styles",
    //     href: "",
    //     subItems: [
    //       { id: 1, name: "Header One", href: "/" },
    //       { id: 2, name: "Header Two", href: "/index-2" },
    //     ],
    //   },
    // ],
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Services",
    href: "/services-single-2",
    subNavItems: servicesNavItems,
  },
  // {
  //   id: 4,
  //   name: "Page",
  //   href: "",
  //   subNavItems: [
  //     { id: 1, name: "Portfolio", href: "/portfolio" },
  //     { id: 2, name: "Portfolio Two", href: "/portfolio-2" },
  //     { id: 3, name: "Portfolio Single", href: "/portfolio-single" },
  //     { id: 4, name: "Team", href: "/team" },
  //     { id: 5, name: "Error", href: "/404" },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Blog",
  //   href: "/blog",
  //   subNavItems: [
  //     { id: 1, name: "Blog", href: "/blog" },
  //     { id: 2, name: "Blog Two", href: "/blog-2" },
  //     { id: 3, name: "Blog Single", href: "/blog-single" },
  //   ],
  // },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export const socials = [

  {
    id: 2,
    icon: "fab fa-facebook-square",
    href: "https://www.facebook.com/share/1AGVZ72Tst/?mibextid=wwXIfr",
  },
  {
    id: 4,
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/elevated_designs.co?igsh=MW9jcnhxcXhwcTYzbQ%3D%3D&utm_source=qr",
  },
];

export const socials3 = [

  {
    id: 2,
    icon: "fab fa-facebook-square",
    href: "https://www.facebook.com/share/1AGVZ72Tst/?mibextid=wwXIfr",
  },
  {
    id: 4,
    icon: "fab fa-instagram",
    href: "#",
  },
];

const info = {
  phone: "+17192376871",
  phoneHref: "7192376871",
  email: "habash.omarrr@gmail.com",
};

const header = {
  logo,
  logo2: logo3,
  navItems,
  socials,
  ...info,
};

export const mobileNav = {
  logo: logo2,
  navItems,
  socials: socials3,
  ...info,
};

export const hiddenBar = {
  logo,
  aboutText:
    "VA Flooring and Home Renovation Company",
  address: "Fairfax VA",
  ...info,
  year: new Date().getFullYear(),
  author: "Elevated Designs",
};

export const pageHeaderThree = {
  bg: bg2,
  phone: "(502) 203-7840",
  phoneHref: "123456789",
};

export const pageHeaderTwo = {
  ...pageHeaderThree,
  bg,
  text: "Free Quotes | First Responder and Military Discount | Fair Pricing",
};

export default header;
