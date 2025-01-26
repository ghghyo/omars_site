import phoneIcon from "@/images/icon/phone.png";
import image from "@/images/resources/services-single-img1.jpg";
import { servicesNavItems } from "./header";

// Update the service data for a flooring company
export const servicesOne = {
  title: "Services We Provide",
  text: "At Elevated Designs, we specialize in flooring and home remodeling services. From tile to hardwood floors, our team delivers beautiful results tailored to your needs.",
  services: [
    {
      id: 1,
      icon: "icon-carpet",
      title: "Carpet Removal",
      text: "We safely remove old carpets to make way for fresh, modern flooring options.",
    },
    {
      id: 2,
      icon: "icon-kitchen1",
      title: "Kitchen Strip Outs",
      text: "We can completely strip out your old kitchen flooring and install new, beautiful tile or vinyl options.",
    },
    {
      id: 3,
      icon: "icon-logs",
      title: "Timber Floor Removal",
      text: "Our team can remove and replace worn or outdated timber flooring with new hardwood or engineered wood flooring.",
    },
    {
      id: 4,
      icon: "icon-wood-pile-svgrepo-com",
      title: "Wood Floor Repair",
      text: "We specialize in repairing wood floors to restore their original beauty and extend their lifespan.",
    },
    {
      id: 5,
      icon: "icon-parquet-floor-svgrepo-com",
      title: "Floor Refinishing",
      text: "We offer professional refinishing services for wood floors to restore their shine and durability.",
    },
    {
      id: 6,
      icon: "icon-light-floor-svgrepo-com",
      title: "Floor Installation",
      text: "We handle everything from tile and vinyl to hardwood flooring installation for your home or business.",
    },
  ],
};

export const servicesTwo = {
  title: "Introducing Our Flooring Services",
  text: "Elevated Designs brings top-quality flooring solutions, ensuring the best in class experience for your home remodeling needs.",
  services: [
    {
      id: 1,
      icon: "icon-carpet",
      image: "services-v2-img1.jpg",
      title: "Carpet Removal",
      text: "Our team efficiently removes old carpets and prepares the space for a fresh flooring solution.",
    },
    {
      id: 2,
      icon: "icon-kitchen",
      image: "services-v2-img2.jpg",
      title: "Kitchen Strip Outs",
      text: "We strip out old flooring in your kitchen and replace it with the perfect flooring options for your remodel.",
    },
    {
      id: 3,
      icon: "icon-logs",
      image: "services-v2-img3.jpg",
      title: "Timber Floor Removal",
      text: "Remove and replace your timber floors with a more modern solution that adds value and elegance to your home.",
    },
    {
      id: 4,
      icon: "icon-wood-board",
      image: "services-v2-img4.jpg",
      title: "Wood Floor Repair",
      text: "We specialize in repairing hardwood floors to restore their shine and strength, ensuring long-lasting beauty.",
    },
    {
      id: 5,
      icon: "icon-parquet-floor-svgrepo-com",
      image: "services-v2-img5.jpg",
      title: "Floor Refinishing",
      text: "Our floor refinishing services give your wood floors a fresh new look, enhancing their appearance and extending their life.",
    },
    {
      id: 6,
      icon: "icon-wheel-saw",
      image: "services-v2-img6.jpg",
      title: "Floor Installation",
      text: "From luxury vinyl planks to ceramic tiles, we offer expert floor installations that perfectly fit your home’s style.",
    },
  ],
};

const serviceSingleCommon = {
  text: "Looking to install new flooring to give your home's interior a fresh look? Elevated Designs is the place to call. We provide demolition and installation of hardwood, luxury vinyl plank, tile floors, and more.",
  text2:
    "Our experienced team ensures a smooth renovation process, from selection to installation, and even handles all necessary permits.",
  text3:
    "Need something changed or not quite working as expected? Whether it’s a floor repair or a new installation, we’ve got you covered with our top-notch solutions.",
  image,
  contentList: [
    "One of America’s most popular floors",
    "Can add warmth and character to any room",
    "Beautiful to live with",
  ],
  contentBottomList: [
    "One of America’s most popular floors",
    "Beautiful to live with",
    "Adds value to your home at resale time",
    "More diverse and delightful than ever",
  ],
};

export const servicesSingleSidebar = {
  navItems: servicesNavItems.slice(2),
  phoneIcon,
  icon: "icon-wood-board",
  contactTitle: "Quality Flooring at \n a Fair Price",
  callText: "Call us for a FREE quote!",
  phone: "7192376871",
  phoneHref: "7192376871",
  title: "Flooring Services",
};

export const servicesSingleOne = {
  ...serviceSingleCommon,
  title: "Refresh Your Interior With \n New Flooring",
};
