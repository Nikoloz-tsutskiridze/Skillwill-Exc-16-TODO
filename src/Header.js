import { useLanguage } from "./LanguageContext";

export const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    en: {
      title: "Todo App",
      languageToggle: "Switch Language",
      header: "Get Things Done!",
    },
    ge: {
      title: "Todo აპლიკაცია",
      languageToggle: "ენის შეცვლა",
      header: "შეასრულეთ დავალებები!",
    },
  };

  return (
    <header>
      <h1>{translations[language].title}</h1>
      <button className="btn-lang" onClick={toggleLanguage}>
        {translations[language].languageToggle}
      </button>
      <h1>{translations[language].header}</h1>
    </header>
  );
};
