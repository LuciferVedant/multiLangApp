import { v4 as uuidv4 } from "uuid";
// import history from "./history";
export const getCommonData = () => {
  const uuid = uuidv4();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  return {
    loggedInUser: user?.email || "Vedant", // need to remove Vedant
    loggedInUserID: user?.userId || 1, // need to remove 1
    loggedInUserType: "admin",
    requestId: uuid,
  };
};
export const navigateToLogin = (response) => {
  history.navigate("/login");
};
export let currencies = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "INR",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "RUB",
  "KRW",
  "BRL",
];
export const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "ch", name: "Chinese" },
  { code: "jp", name: "Japanese" },
  { code: "ar", name: "Arabic" },
  { code: "ru", name: "Russian" },
  { code: "pt", name: "Portuguese" },
  { code: "hi", name: "Hindi" },
  { code: "ko", name: "Korean" },
  { code: "it", name: "Italian" },
];
export let countries = [
  "India",
  "Russia",
  "UK",
  "USA",
  "Spain",
  "Portugal",
  "UAE",
  "Italy",
  "Japan",
  "China",
  "South Korea",
  "Germany",
  "France",
  "China",
];
export let countryCodes = [
  "India - IN (+91)",
  "Russia - RU (+7)",
  "UK - GB (+44)",
  "USA - US (+1)",
  "Spain - ES (+34)",
  "Portugal - PT (+351)",
  "UAE - AE (+971)",
  "Italy - IT (+39)",
  "Japan - JP (+81)",
  "China - CN (+86)",
  "South Korea - KR (+82)",
  "Germany - DE (+49)",
  "France - FR (+33)",
  "China - CN (+86)",
];
