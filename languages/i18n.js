import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import translations from "./translations.json";

export const languages = [
  { key: "es", value: "Castellano" },
  { key: "cat", value: "Català" },
  { key: "en", value: "English" },
];

export let defaultLanguage = "en";

export function changeLanguage(language) {
  defaultLanguage = language;
  i18n.changeLanguage(language);
  AsyncStorage.setItem("language", language);
}

async function updateLanguageFromStore() {
  try {
    const language = await AsyncStorage.getItem("language");
    if (language) {
      changeLanguage(language);
    }
  } catch (error) {
    console.error(error);
  }
}

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

updateLanguageFromStore();
