import { servicesSingleSidebar } from "@/data/services";
import { useRouter } from "next/router";
import React from "react";
import ContactInfo from "./ContactInfo";

const { navItems, title } = servicesSingleSidebar;

const ServicesSingleSidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="services-single__sidebar">
      <div className="services-single__sidebar-single animated fadeInUp">
          <ul className="services-single__sidebarlink">
            {navItems.map(({ id, name, href }) => (
              <li key={id} className={pathname === href ? "active" : ""}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>

      </div>
      <ContactInfo info={servicesSingleSidebar} />
    </div>
  );
};

export default ServicesSingleSidebar;
