import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="d-flex justify-content-center pagenotfound">
      <div className="text-center">
        <h1 className="fs-2 fw-bold mb-3">{t("404")}</h1>
        <p className="fs-4 mb-3">{t("pageNotFound")}</p>
        <p className="fs-5 mb-5">{t("pageNotFoundText")}</p>
        <Button onClick={handleGoBack}>{t("takeMeHome")}</Button>
      </div>
    </div>
  );
};

export default PageNotFound;
