import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Sentiment Analysis Tools": "Sentiment Analysis Tools",
      "Stock Sentiment Analysis, Cryptocurrency Analysis, Learning": "Stock Sentiment Analysis, Cryptocurrency Analysis, Learning",
      "Stock Analysis": "Stock Analysis",
      "Current price and sentiment data": "Current price and sentiment data",
      "Most positive/most negative sentiment graphs": "Most positive/most negative sentiment graphs",
      "Time scales": "Time scales",
      "Data table for thousands of companies": "Data table for thousands of companies",
      "Cryptocurrency Analysis": "Cryptocurrency Analysis",
      "Data table for hundreds of currencies": "Data table for hundreds of currencies",
      "Learn": "Learn",
      "Technical analysis": "Technical analysis",
      "Fundamental analysis": "Fundamental analysis",
      "Common terms": "Common terms",
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Sentiment Analysis Tools": "Outils d'analyse de sentiment",
      "Stock Sentiment Analysis, Cryptocurrency Analysis, Learning": "Analyse de sentiment des actions, analyse de cryptomonnaies, apprentissage",
      "Stock Analysis": "Analyse des actions",
      "Current price and sentiment data": "Prix actuel et données de sentiment",
      "Most positive/most negative sentiment graphs": "Graphiques de sentiment le plus positif/le plus négatif",
      "Time scales": "Échelles temporelles",
      "Data table for thousands of companies": "Tableau de données pour mille entreprises",
      "Cryptocurrency Analysis": "Analyse de cryptomonnaies",
      "Data table for hundreds of currencies": "Tableau de données pour centaines de devises",
      "Learn": "Apprendre",
      "Technical analysis": "Analyse technique",
      "Fundamental analysis": "Analyse fondamentale",
      "Common terms": "Termes communs",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;