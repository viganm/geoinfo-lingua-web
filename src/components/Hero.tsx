import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import Logo from "./Logo";
import leica2 from "../pictures/leica2.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative">
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <div className="flex justify-center lg:justify-start mb-6">
                {/* <Logo size="small" /> */}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-xl mx-auto lg:mx-0">
                {t("hero.subtitle")}
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Map className="mr-2 h-5 w-5" /> {t("hero.cta")}
              </Button>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={leica2}
                  alt="Surveyor working with equipment"
                  className="rounded-lg shadow-2xl max-h-[500px] w-full object-cover"
                />
                <div className="absolute -bottom-3 -left-3 bg-blue-200 h-24 w-24 rounded-full flex items-center justify-center">
                  <div className="h-20 w-20 flex items-center justify-center overflow-hidden rounded-full">
                    <Logo size="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="w-full overflow-hidden">
        <svg
          className="w-full block"
          style={{
            width: "100%",
            display: "block",
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hero-wave-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#hero-wave-gradient)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
