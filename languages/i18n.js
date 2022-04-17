import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./translations.json";

const languages = [
  { key: "es", value: "Castellà" },
  { key: "cat", value: "Català" },
  { key: "en", value: "English" },
];

const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

const defaultLanguage = "en";

translations.fallbackLng = defaultLanguage;

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: translations.resources,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default {
  languages,
  changeLanguage,
};
