import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { actions, generalSelector } from "./slice/generalSlice";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { countries, countryCodes } from "../utils/helper";
import ContactUsImage from "../assets/ContactUsImage.jpeg";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    name,
    email,
    countryCode,
    contactNo,
    companyName,
    country,
    message,
    darkMode,
  } = useSelector(generalSelector);
  const handleSubmit = () => {
    if (
      name === "" ||
      email === "" ||
      message === "" ||
      country === "" ||
      countryCode === "" ||
      contactNo === "" ||
      companyName === ""
    ) {
      toast.error("Please enter all fields");
      return;
    }
    toast.success(
      "Details Submitted Successfully. Our Team will contact you soon..."
    );
    navigate("/");
  };
  return (
    <div className="px-4 h-100 w-100">
      <Row className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-around">
        <Col className="animate__animated animate__backInUp ">
          <div className="d-flex flex-row justify-content-center my-2">
            <FaPhoneAlt />
          </div>
          <p className="text-center">{t("talkToUs")}</p>
          <p className="text-center">{t("giveUsACall")}</p>
        </Col>
        <Col className="animate__animated animate__backInUp">
          <div className="d-flex flex-row justify-content-center my-2">
            <FaLocationDot />
          </div>
          <p className="text-center">{t("changeNetworksAddressHeading")}</p>
          <p className="text-center">{t("changeNetworksAddress")}</p>
        </Col>
        <Col className="animate__animated animate__backInUp">
          <div className="d-flex flex-row justify-content-center my-2">
            <MdEmail />
          </div>
          <p className="text-center">{t("sendEmail")}</p>
          <p className="text-center">{t("emailMessage")}</p>
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center flex-md-row justify-content-md-around ">
        <Col className="px-0 d-flex flex-row justify-content-center justify-content-sm-around">
          <img
            className="animate__animated animate__fadeInUp mx-3"
            style={{ marginTop: "8rem" }}
            src={ContactUsImage}
            alt="Contact Image"
            height={300}
            width={300}
          />
        </Col>
        <Col className="px-0">
          <Form
            className={`${
              darkMode ? "" : ""
            }  animate__animated animate__fadeInUp`}
            onSubmit={handleSubmit}
          >
            <div className="text-center my-4 fw-bold fs-3">
              {t("getInTouchWithuS")}
            </div>
            <div className="text-center my-4 fw-bold fs-5">
              {t("getInTouchWithUsMessage")}
            </div>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label className="fs-5 px-1 text-start" column>
                {t("name")}
              </Form.Label>
              <Col xs={8}>
                <Form.Control
                  type="text"
                  value={name ? name : ""}
                  placeholder="Enter Name"
                  onChange={(e) => dispatch(actions.setName(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label className="fs-5 px-1 text-start" column>
                {t("email")}
              </Form.Label>
              <Col xs={8}>
                <Form.Control
                  type="email"
                  value={email ? email : ""}
                  placeholder={t("enterEmail")}
                  onChange={(e) => dispatch(actions.setEmail(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCounry"
            >
              <Form.Label className="fs-5 px-1 text-start" column>
                {t("country")}
              </Form.Label>
              <Col xs={8}>
                <Form.Select
                  aria-label="Select Country"
                  //   defaultValue=""
                  value={country ? country : ""}
                  onChange={(e) => dispatch(actions.setCountry(e.target.value))}
                  //   value={data?.physicalStatus ? data?.physicalStatus : ""}
                >
                  {/* <option value="">Select Record Status</option> */}
                  <option value="">{t("selectCountry")}</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCounryCode"
            >
              <Form.Label className="fs-5 px-1 text-start" column>
                {t("countryCode")}
              </Form.Label>
              <Col xs={8}>
                <Form.Select
                  aria-label="Select Country Code"
                  value={countryCode ? countryCode : ""}
                  //   defaultValue=""
                  onChange={(e) =>
                    dispatch(actions.setCountryCode(e.target.value))
                  }
                  //   value={data?.physicalStatus ? data?.physicalStatus : ""}
                >
                  {/* <option value="">Select Record Status</option> */}
                  <option value="">{t("selectCountryCode")}</option>
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalContactNo"
            >
              <Form.Label className="fs-5 px-1 text-start" column>
                {t("contactNo")}
              </Form.Label>
              <Col xs={8}>
                <Form.Control
                  type="number"
                  value={contactNo ? contactNo : ""}
                  placeholder={t("enterContact")}
                  onChange={(e) =>
                    dispatch(actions.setContactNo(e.target.value))
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalMessage"
            >
              <Form.Label className="fs-5 px-1 text-start" column>
                {t("message")}
              </Form.Label>
              <Col xs={8}>
                <Form.Control
                  // type="text"
                  as="textarea"
                  value={message ? message : ""}
                  rows={4}
                  placeholder={t("enterMessage")}
                  onChange={(e) => dispatch(actions.setMessage(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCompanyName"
            >
              <Form.Label className="fs-5 px-1 text-start" column>
                {t("companyName")}
              </Form.Label>
              <Col xs={8}>
                <Form.Control
                  type="text"
                  value={companyName ? companyName : ""}
                  placeholder={t("enterCompanyName")}
                  onChange={(e) =>
                    dispatch(actions.setCompanyName(e.target.value))
                  }
                />
              </Col>
            </Form.Group>

            <div className="d-flex flex-row justify-content-center my-2">
              <Button
                className="mx-2"
                type="submit"
                variant={darkMode ? "secondary" : "dark"}
              >
                {t("submit")}
              </Button>

              <Button
                className="mx-2"
                variant={darkMode ? "secondary" : "dark"}
                onClick={() => {
                  dispatch(actions.resetAllContactFields());
                }}
              >
                {t("reset")}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
