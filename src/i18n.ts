import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "lib/i18n/dictionary";

i18n.use(initReactI18next).init(
  {
    resources,
    lng: localStorage.getItem("language") || "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  },
  (err, t) => {
    if (err) return console.error("Something went wrong loading", err);
    t("key"); // initialized and ready to go!
  }
);

export default i18n;
