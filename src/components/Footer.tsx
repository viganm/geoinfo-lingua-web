
import { useLanguage } from "../context/LanguageContext";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GeoInfo</h3>
            <p className="text-blue-200 mb-4">
              Professional land surveying solutions for all your geospatial needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  {t("services.item1.title")}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  {t("services.item2.title")}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  {t("services.item3.title")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.about")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.careers")}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-blue-800" />
        
        <div className="text-center text-blue-300">
          <p>{t("footer.copyright").replace("2023", currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
