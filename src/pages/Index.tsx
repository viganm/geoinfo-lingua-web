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
    // Set page title based on language
    document.title =
      language === "en"
        ? "GeoInfo - Land Surveying Solutions"
        : "GeoInfo - Zgjidhje për Matjet e Tokës";

    // Set favicon using the GeoInfo logo
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = "favicon.ico";
      document.head.appendChild(newLink);
    } else {
      link.href = "favicon.ico";
    }
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
