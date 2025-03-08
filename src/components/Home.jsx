import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Card } from "react-bootstrap";
import { generalSelector } from "./slice/generalSlice";
import { useSelector, useDispatch } from "react-redux";
const exchangeRates = {
  USD: 1, // Base currency
  EUR: 0.91, // 1 USD = 0.91 EUR
  GBP: 0.77, // 1 USD = 0.77 GBP
  JPY: 150.45, // 1 USD = 150.45 JPY
  INR: 83, // 1 USD = 83 INR
  AUD: 1.52, // 1 USD = 1.52 AUD
  CAD: 1.36, // 1 USD = 1.36 CAD
  CHF: 0.88, // 1 USD = 0.88 CHF
  CNY: 7.17, // 1 USD = 7.17 CNY
  RUB: 92.15, // 1 USD = 92.15 RUB
  KRW: 1315.5, // 1 USD = 1315.50 KRW
  BRL: 4.95, // 1 USD = 4.95 BRL
};

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currency } = useSelector(generalSelector);
  // const currency = localStorage.getItem("currency") || "USD"; // Default to USD

  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `${t("product")} ${i + 1}`,
    description: t("productDescription"),
    price: (i + 1) * 10, // Base price in USD
  }));

  const recommendedProducts = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `${t("product")} ${i + 1}`,
    description: t("productDescription"),
    price: (i + 1) * 10, // Base price in USD
  }));

  // Function to convert price based on selected currency
  const convertPrice = (price, currency) => {
    const rate = exchangeRates[currency] || 1; // Default to 1 if currency is missing
    return (price * rate).toFixed(2);
  };

  return (
    <Container className="mt-4 h-100 w-100">
      <div className="text-center fs-2 animate__animated animate__backInUp">
        {t("welcomeMessage")}
      </div>
      <Row className="g-4 mt-5">
        <div className="text-center fs-4">{t("recommendedProducts")}</div>
        {recommendedProducts.map((product) => (
          <Col xs={12} md={4} lg={3} key={product.id}>
            <Card className="p-3 shadow animate__animated animate__fadeInUp">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>{t("price")} </strong>
                  {convertPrice(product.price, currency)} {currency}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-4 mt-5">
        <div className="text-center fs-4">{t("productsList")}</div>
        {products.map((product) => (
          <Col xs={12} md={4} lg={3} key={product.id}>
            <Card className="p-3 shadow animate__animated animate__fadeInUp">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>{t("price")} </strong>
                  {convertPrice(product.price, currency)} {currency}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
// export const Home = () => {
//   const { t } = useTranslation();
//   return (
//     <div className="container vh-100 w-100">
//       <div className="text-center fs-2 animate__animated animate__backInUp">
//         Welcome to MultiLangApp
//       </div>
//       <div className="d-flex flex-colimn">

//       </div>
//     </div>
//   );
// };
