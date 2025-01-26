import useToggle from "@/hooks/useToggle";
import { TextSplit, Title } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Image, Row, Modal, Carousel } from "react-bootstrap";

const AboutOne = ({
  className = "",
  aboutTwo = false,
  aboutData = {},
  listCount,
}) => {
  const [isOpen, toggleOpen] = useToggle(false);

  const {
    shape1,
    tagline,
    title,
    text,
    lists,
    text2,
  } = aboutData;

  return (
    <>
      <section className={classNames("about-one", className)}>
        <Container>
          <Row>
            <Col xl={6}>
              <div className="about-one__img">
                <div className="shape1 animated zoom-fade">
                  <Image src={shape1} alt="" />
                </div>

                {/* Check out our work button */}
                <div
                  className="about-one__work-link"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: "#333", // Dark background
                    padding: "20px 40px", // Increased padding for a bigger button
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "24px", // Larger text
                    fontWeight: "bold",
                    transition: "background-color 0.3s ease",
                    position: "relative",
                    marginTop: "150px", // Move the button down
                  }}
                >
                  <a
                    onClick={toggleOpen}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    title="Slideshow"
                  >
                    <span
                      className="icon-play-button-3"
                      style={{
                        fontSize: "40px", // Bigger play icon
                        marginRight: "15px", // Space between icon and text
                      }}
                    ></span>
                    <span>Check out our work here</span>
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="about-one__content">
                <Title tagline={tagline}>
                  <TextSplit text={title} />
                </Title>
                {!aboutTwo ? (
                  <div className="about-one__content-text">
                    <TextSplit text={text} as="p" />
                  </div>
                ) : (
                  <>
                    <div className="about-two__content-text1">
                      <p>{text}</p>
                    </div>
                    <div className="about-two__content-text2">
                      <p>{text2}</p>
                    </div>
                  </>
                )}
                <ul className="about-one__content-list">
                  {lists.slice(0, listCount).map(({ id, icon, title }) => (
                    <li key={id}>
                      <div className="icon">
                        <span className={icon}></span>
                      </div>
                      <div className="title">
                        <h3>{title}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal for the Image Slideshow */}
      <Modal show={isOpen} onHide={toggleOpen} size="lg" centered>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <Image
                src="/IMG_0508.jpg"
                alt="Image 1"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/IMG_0510.jpg"
                alt="Image 2"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/IMG_0509.jpg"
                alt="Image 3"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/IMG_3715.jpg"
                alt="Image 4"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/IMG_4196.jpg"
                alt="Image 5"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/IMG_8065.jpg"
                alt="Image 6"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/IMG_9402.jpg"
                alt="Image 7"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutOne;
