import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TEXT_EN } from "./text/en";
import { TEXT_ES } from "./text/es";
import { TEXT_AR } from "./text/ar";
import { TEXT_FR } from "./text/fr";
import { TEXT_CH } from "./text/ch"; //chineses
import { TEXT_DE } from "./text/ge"; //german
import { TEXT_HI } from "./text/hi"; // hindi
import { TEXT_IT } from "./text/it"; // italian
import { TEXT_JP } from "./text/jp"; // japanese
import { TEXT_KO } from "./text/ko"; // korean
import { TEXT_PT } from "./text/pt"; // Portuguese
import { TEXT_RU } from "./text/ru"; // russian

const resources = {
  en: { translation: TEXT_EN },
  es: { translation: TEXT_ES },
  ar: { translation: TEXT_AR },
  fr: { translation: TEXT_FR },
  ch: { translation: TEXT_CH }, // Chinese
  de: { translation: TEXT_DE }, // German
  hi: { translation: TEXT_HI }, // Hindi
  it: { translation: TEXT_IT }, // Italian
  jp: { translation: TEXT_JP }, // Japanese
  ko: { translation: TEXT_KO }, // Korean
  pt: { translation: TEXT_PT }, // Portuguese
  ru: { translation: TEXT_RU }, // Russian
};

const language = localStorage.getItem("language") || "en";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

// ch: { translation: TEXT_CH },
// de: { translation: TEXT_DE },
// hi: { translation: TEXT_HI },
// it: { translation: TEXT_IT },
// jp: { translation: TEXT_JP },
// ko: { translation: TEXT_KO },
// pt: { translation: TEXT_PT },
// ru: { translation: TEXT_RU },

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// const initTranslations = async () => {
//   const language = localStorage.getItem("language") || "en";
//   const resources = {};
//   resources[language] = { translation: await loadTranslations(language) };

//   i18n.use(initReactI18next).init({
//     resources,
//     lng: language,
//     fallbackLng: "en",
//     interpolation: { escapeValue: false },
//   });
// };

// initTranslations();

// export default i18n;
