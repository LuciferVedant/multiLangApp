import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { generalSelector } from "../components/slice/generalSlice";
import { actions } from "../components/slice/generalSlice";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { currencies, languages } from "../utils/helper";
function CollapsibleNavbar() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { darkMode, displayLanguage, language, currency } =
    useSelector(generalSelector);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const navigate = useNavigate();

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const changeLanguage = (lang) => {
    dispatch(actions.setDisplayLanguage(lang.name));
    dispatch(actions.setLanguage(lang.code));
    i18n.changeLanguage(lang.code);
    handleCloseOffcanvas();
  };

  const changeCurrency = (currency) => {
    dispatch(actions.setCurrency(currency));
    handleCloseOffcanvas();
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg={darkMode ? "dark" : "secondary-subtle"}
          variant={darkMode ? "dark" : "secondary-subtle"}
          expand={expand}
          className="text-white mb-3"
        >
          <Container fluid>
            <Navbar.Brand>
              <Nav.Link as={Link} to="/">
                {t("multiLang")}
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={() => setShowOffcanvas(true)}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className=""
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas} // Controlled Offcanvas state
              onHide={handleCloseOffcanvas} // Close Offcanvas on hide
              className={
                darkMode
                  ? "bg-dark text-white"
                  : "bg-secondary-subtle text-dark"
              }
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {t("multiLang")}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Nav.Link
                    as={Link}
                    to="/products"
                    onClick={handleCloseOffcanvas}
                  >
                    {t("products")}
                  </Nav.Link> */}

                  <NavDropdown
                    align="start"
                    title={displayLanguage}
                    id="language-dropdown"
                  >
                    {languages.map((lng) => (
                      <NavDropdown.Item
                        key={lng.code}
                        active={lng.code === language}
                        onClick={() => changeLanguage(lng)}
                      >
                        {lng.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

                  <NavDropdown
                    align="start"
                    title={currency}
                    id="support-dropdown"
                  >
                    {currencies.map((curr) => (
                      <NavDropdown.Item
                        key={curr}
                        active={curr === currency}
                        onClick={() => changeCurrency(curr)}
                        // active={lng.code === language}
                        // onClick={() => changeLanguage(lng)}
                      >
                        {curr}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

                  <Nav.Link
                    as={Link}
                    to="/aboutus"
                    onClick={handleCloseOffcanvas}
                  >
                    {t("aboutUs")}
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/contactus"
                    onClick={handleCloseOffcanvas}
                  >
                    {t("contactUs")}
                  </Nav.Link>

                  <Button
                    variant={darkMode ? "secondary" : "dark"}
                    onClick={() => dispatch(actions.toggleTheme())}
                    // className="text-light"
                  >
                    {showOffcanvas ? (
                      t("changeTheme")
                    ) : darkMode ? (
                      <MdLightMode />
                    ) : (
                      <MdDarkMode />
                    )}
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CollapsibleNavbar;
