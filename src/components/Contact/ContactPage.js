import { contactPage } from "@/data/contact";
import { TextSplit } from "@/Reuseable";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const { title, text, phone, phoneHref, mobile, address, formTitle, formText } =
  contactPage;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="contact-page">
      <Container>
        <Row>
          <Col xl={5} lg={5}>
            <div className="contact-page__get-in-touch">
              <div className="title">
                <h2>{title}</h2>
                <TextSplit text={text} as="p" />
              </div>
              <ul>
                <li>
                  <div className="icon rotate">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text">
                    <span>Phone</span>
                    <p className="telephone">
                      Call : <a href={`tel:${phoneHref}`}>{phone}</a>
                    </p>
                    <p className="mobile">
                      Fax : <a href={`tel:${phoneHref}`}>{mobile}</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon bg2">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text">
                    <span>Address</span>
                    <TextSplit as="p" text={address} />
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
