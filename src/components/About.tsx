
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              {t("about.title")}
            </h2>
            <p className="text-gray-700 mb-6">
              {t("about.description")}
            </p>
            <p className="text-gray-700 mb-8">
              {t("about.mission")}
            </p>
            <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white">
              {t("about.learnMore")}
            </Button>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1531&auto=format&fit=crop" 
                alt="Surveyor team"
                className="rounded-lg shadow-md object-cover h-48 w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop" 
                alt="Surveying equipment"
                className="rounded-lg shadow-md object-cover h-48 w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1582436416933-df2a692bd48e?q=80&w=1529&auto=format&fit=crop" 
                alt="Drone mapping"
                className="rounded-lg shadow-md object-cover h-48 w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop" 
                alt="Map planning"
                className="rounded-lg shadow-md object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
