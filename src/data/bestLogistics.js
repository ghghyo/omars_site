import image from "@/images/resources/best-logistics-v1-img.jpg";
import shape1 from "@/images/shapes/best-logistics-v1-shape1.png";
import shape from "@/images/shapes/best-logistics-v1-shape2.png";

export const bestLogistics = {
  shape,
  title: "Expert Flooring \n Installers",
  text: "We have been doing flooring in the DMV area for a very long time",
  bottomText: "We can help you create your dream home",
  overlayContent: "We have been in business since 2006 ! With over 200 clients.",
  counters: [
    {
      id: 1,
      title: "Completed Projects",
      count: 200,
      text: "Satisfied Clients",
      isK: true,
    },
    {
      id: 2,
      title: "Our Experts",
      count: 5,
      text: "Expert Flooring Employees",
      isK: false,
    },
  ],
  images: [
    {
      id: 1,
      className: "shape1 animated zoom-fade",
      image: shape1,
    },
    {
      id: 2,
      className: "shape3",
      image: shape,
    },

    {
      id: 3,
      className: "best-logistics-one__img-inner",
      image,
    },
  ],
};
