
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-orange-500 px-4 py-2 rounded-b-lg">
              <h1 className="text-2xl font-bold">GeoInfo</h1>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-orange-400 transition-colors"
            >
              {t("nav.home")}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-orange-400 transition-colors"
            >
              {t("nav.services")}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-orange-400 transition-colors"
            >
              {t("nav.about")}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-orange-400 transition-colors"
            >
              {t("nav.contact")}
            </button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-blue-800">
                  <Globe className="h-5 w-5" />
                  <span className="ml-2 hidden lg:inline">{t("language")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem 
                  className={language === "en" ? "bg-muted" : ""}
                  onClick={() => changeLanguage("en")}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={language === "sq" ? "bg-muted" : ""}
                  onClick={() => changeLanguage("sq")}
                >
                  Shqip
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-blue-800 mr-2">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem 
                  className={language === "en" ? "bg-muted" : ""}
                  onClick={() => changeLanguage("en")}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className={language === "sq" ? "bg-muted" : ""}
                  onClick={() => changeLanguage("sq")}
                >
                  Shqip
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => scrollToSection('home')}
            >
              {t("nav.home")}
            </button>
            <button
              className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => scrollToSection('services')}
            >
              {t("nav.services")}
            </button>
            <button
              className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => scrollToSection('about')}
            >
              {t("nav.about")}
            </button>
            <button
              className="block w-full text-left px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => scrollToSection('contact')}
            >
              {t("nav.contact")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
