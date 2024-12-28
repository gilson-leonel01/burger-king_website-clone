import React from "react";
import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Burger",
    description:
      "A classic favorite! A juicy beef patty grilled to perfection, topped with fresh lettuce, tomatoes, onions, pickles, and a dollop of our signature sauce, all wrapped in a soft sesame seed bun.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Chiken Burger",
    description:
      "Craving chicken? Enjoy a crispy or grilled chicken fillet, complemented by fresh lettuce, creamy mayo, and a toasted bun for a satisfying bite every time.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Veg Burger",
    description:
      "A tasty vegetarian option! A wholesome veggie patty paired with fresh lettuce, tomatoes, and a touch of creamy sauce, served in a soft bun.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div id="services" className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Services"
            subtitle="Our Services"
            description={
              "Discover our services: dine-in, drive-thru, and online ordering. We make it easy for you to enjoy your favorite meals anytime, anywhere."
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
