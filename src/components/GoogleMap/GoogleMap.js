import React from "react";

const GoogleMap = () => {
  return (
    <section className="contact-page-google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19829.01314520238!2d-77.3424369!3d38.8462234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64be99976b02d%3A0x66bb1d1199e1d80!2sFairfax%2C%20VA!5e0!3m2!1sen!2sus!4v1674587123456!5m2!1sen!2sus"
        className="contact-page-google-map__one"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
