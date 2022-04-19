import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import translations from "./translations.json";

export const languages = [
  { key: "es", value: "Castellà" },
  { key: "cat", value: "Català" },
  { key: "en", value: "English" },
];

export function changeLanguage(language) {
  i18n.changeLanguage(language);
  AsyncStorage.setItem("language", language);
}

export async function getLanguage() {
  try {
    const language = await AsyncStorage.getItem("language");
    return language;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const defaultLanguage = "en";

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
