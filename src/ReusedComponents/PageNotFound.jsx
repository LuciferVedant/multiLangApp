import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { generalSelector } from "../components/slice/generalSlice";
const PageNotFound = () => {
  const { t } = useTranslation();
  const { darkMode } = useSelector(generalSelector);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={`d-flex justify-content-center vh-100 vw-100 pagenotfound ${
        darkMode ? "text-light bg-dark" : "text-dark bg-secondary-subtle"
      }`}
    >
      <div className="text-center">
        <h1 className="fs-2 fw-bold mb-3">404</h1>
        <p className="fs-4 mb-3">{t("pageNotFound")}</p>
        <p className="fs-5 mb-5">{t("pageNotFoundText")}</p>
        <Button
          variant={darkMode ? "secondary" : "dark"}
          className="mb-4"
          onClick={handleGoBack}
        >
          {t("takeMeHome")}
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
