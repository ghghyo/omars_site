import image from "@/images/resources/mission-v1-img1.jpg";
import image2 from "@/images/resources/mission-v1-img2.jpg";
import shape from "@/images/shapes/mission-v1-shape1.jpg";


export const missionOne = {
  missions: [
    {
      id: 1,
      title: "Our Mission",
      text: "At Elevated Designs, our mission is to provide exceptional flooring and home remodeling services that enhance the beauty, functionality, and value of your home. We aim to deliver outstanding craftsmanship while prioritizing our clients' satisfaction and needs.",
      text2:
        "Our experienced team ensures each project is completed to the highest standards, using quality materials and innovative techniques. From flooring installation to full home transformations, our mission is to turn your vision into reality with a hassle-free experience.",
    },
    {
      id: 2,
      title: "Our Vision",
      text: "We envision a future where Elevated Designs becomes the leading name in the flooring and home remodeling industry. We strive to set the standard for excellence in customer service, design, and execution, making high-quality home improvements accessible to all.",
      text2:
        "Our goal is to continuously evolve and expand our offerings to meet the diverse needs of our clients. By staying ahead of industry trends and focusing on sustainable solutions, we aim to be the go-to choice for anyone looking to elevate their living spaces.",
    },
  ],
  images: [
    {
      id: 1,
      image: shape,
      className: "shape1",
    },
    {
      id: 2,
      image: image,
      className: "mission-one__img-img1",
    },
    {
      id: 3,
      image: image2,
      className: "mission-one__img-img2 animated slideInRight",
    },
  ],
};
