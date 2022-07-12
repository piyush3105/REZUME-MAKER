import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          summary: "Summary",
          
          Jan: "Jan",
          Feb: "Feb",
          Mar: "Mar",
          Apr: "Apr",
          May: "May",
          Jun: "Jun",
          July: "July",
          Aug: "Aug",
          Sep: "Sep",
          Oct: "Oct",
          Nov: "Nov",
          Dec: "Dec",
          notFoundMsg: "Page Not Found!",
        },
      },
      fa: {
        translation: {
          AliHerawi: "",
          summary: "",
          date: "",
          
          AccountDetails: "",
          contacts: "",
          edit: "",
          userName: "",
          pass: "",
          phoneNumber: "",
          email: "",
          address: "",
          upload: "",
          location: "",
          actions: "",
          modalMessage: "",
          delete: "",
          cancel: "",
          category: "",
          all: "",
          Jan: "",
          Feb: "",
          Mar: "",
          Apr: "",
          May: "",
          Jun: "",
          July: "",
          Aug: "",
          Sep: "",
          Oct: "",
          Nov: "",
          Dec: "",
          notFoundMsg: "",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
