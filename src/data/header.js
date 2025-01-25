import bg from "@/images/backgrounds/page-header-img2.jpg";
import bg2 from "@/images/backgrounds/page-header-img3.jpg";
import logo from "@/images/resources/logo-1.png";
import logo3 from "@/images/resources/logo-2.png";
import logo2 from "@/images/resources/mobilemenu_logo.png";

export const servicesNavItems = [
  { id: 1, name: "Services", href: "/services" },
  { id: 2, name: "Services Two", href: "/services-2" },
  {
    id: 3,
    name: "Floor Demolition Installation",
    href: "/services-single-1",
  },
  { id: 4, name: "Floor Refinishing", href: "/services-single-2" },
  { id: 5, name: "Luxury Vinyl Plank", href: "/services-single-3" },
  { id: 6, name: "Emergency Door Repair", href: "/services-single-4" },
  { id: 7, name: "Heavy Industry & Mining", href: "/services-single-5" },
];

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      {
        id: 1,
        name: "Home One",
        href: "/",
      },
      {
        id: 2,
        name: "Home Two",
        href: "/index-2",
      },
      {
        id: 3,
        name: "Header Styles",
        href: "",
        subItems: [
          { id: 1, name: "Header One", href: "/" },
          { id: 2, name: "Header Two", href: "/index-2" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
    subNavItems: servicesNavItems,
  },
  {
    id: 4,
    name: "Page",
    href: "",
    subNavItems: [
      { id: 1, name: "Portfolio", href: "/portfolio" },
      { id: 2, name: "Portfolio Two", href: "/portfolio-2" },
      { id: 3, name: "Portfolio Single", href: "/portfolio-single" },
      { id: 4, name: "Team", href: "/team" },
      { id: 5, name: "Error", href: "/404" },
    ],
  },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
    subNavItems: [
      { id: 1, name: "Blog", href: "/blog" },
      { id: 2, name: "Blog Two", href: "/blog-2" },
      { id: 3, name: "Blog Single", href: "/blog-single" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-linkedin",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-google",
    href: "#",
  },
];

export const socials3 = [
  {
    id: 1,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-instagram",
    href: "#",
  },
];

const info = {
  phone: "+88 016848651",
  phoneHref: "123456789",
  email: "infogamil@gmail.com",
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  address: "48 10h Street, Office 478 Road 5 \n Berlin, CA 700156",
  ...info,
  year: new Date().getFullYear(),
  author: "Alori",
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
