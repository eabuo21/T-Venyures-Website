import React from "react";
import { i18n } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false,
    },
  });
