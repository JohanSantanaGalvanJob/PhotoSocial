import i18next from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(Backend).use(initReactI18next).use(LanguageDetector).init({

    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    },
    debug: process.env.NODE_ENV === "development",
});

export default i18next;
