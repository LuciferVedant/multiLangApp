import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutusimage from "../assets/aboutusimage.jpg.webp";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="container h-100 w-100">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row justify-content-around">
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <p className="animate__animated animate__fadeInUp">
                {t("paraOne")}
              </p>
              <p className="animate__animated animate__fadeInUp">
                {t("paraTwo")}
              </p>
              <img
                src={aboutusimage}
                height={300}
                width={400}
                className="my-4 animate__animated animate__fadeInUp"
              />
              <p className="animate__animated animate__fadeInUp">
                {t("paraThree")}
              </p>
              <p className="animate__animated animate__fadeInUp">
                {t("paraFour")}
              </p>
              <p className="animate__animated animate__fadeInUp">
                {t("paraFive")}
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
