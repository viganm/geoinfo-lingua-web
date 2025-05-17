
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === "en" ? "GeoInfo - Land Surveying Solutions" : "GeoInfo - Zgjidhje për Matjet e Tokës";
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
