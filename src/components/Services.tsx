import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Map,
  Ruler,
  Layers,
  Layers3,
  Flag,
  Compass,
  MapPin,
  TrafficCone,
  Send,
  Route,
  Waypoints,
  Scale,
} from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Map className="h-10 w-10 text-blue-500" />,
      title: t("services.item1.title"),
      description: t("services.item1.description"),
    },
    {
      icon: <Ruler className="h-10 w-10 text-blue-500" />,
      title: t("services.item2.title"),
      description: t("services.item2.description"),
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-500" />,
      title: t("services.item3.title"),
      description: t("services.item3.description"),
    },
    {
      icon: <Layers3 className="h-10 w-10 text-blue-500" />,
      title: t("services.item4.title"),
      description: t("services.item4.description"),
    },
    {
      icon: <Flag className="h-10 w-10 text-blue-500" />,
      title: t("services.item5.title"),
      description: t("services.item5.description"),
    },
    {
      icon: <Compass className="h-10 w-10 text-blue-500" />,
      title: t("services.item6.title"),
      description: t("services.item6.description"),
    },
    {
      icon: <Scale className="h-10 w-10 text-blue-500" />,
      title: t("services.item11.title"),
      description: t("services.item11.description"),
    },
    {
      icon: <TrafficCone className="h-10 w-10 text-blue-500" />,
      title: t("services.item7.title"),
      description: t("services.item7.description"),
    },
    {
      icon: <Send className="h-10 w-10 text-blue-500" />,
      title: t("services.item8.title"),
      description: t("services.item8.description"),
    },
    {
      icon: <Waypoints className="h-10 w-10 text-blue-500" />,
      title: t("services.item9.title"),
      description: t("services.item9.description"),
    },
    {
      icon: <Route className="h-10 w-10 text-blue-500" />,
      title: t("services.item10.title"),
      description: t("services.item10.description"),
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-blue-800 hover:bg-blue-700">
            {t("services.readMore")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
