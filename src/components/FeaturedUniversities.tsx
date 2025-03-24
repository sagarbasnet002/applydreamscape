
import { useState } from "react";
import { universities } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import harvardImage from "../assets/harvard.jpg";
import oxfordImage from "../assets/oxford.jpg";
import stanfordImage from "../assets/stanford.jpg";
import mitImage from "../assets/mit.jpg";
import torontoImage from "../assets/toronto.jpg";

export const FeaturedUniversities = () => {
  const [activeTab, setActiveTab] = useState("popular");
  
  const universityImages = {
    1: harvardImage,
    2: oxfordImage,
    3: stanfordImage,
    5: mitImage,
    6: torontoImage,
  };

  const featuredUniversities = universities.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Universities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover top educational institutions from around the world
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <Button 
              variant={activeTab === "popular" ? "default" : "outline"}
              onClick={() => setActiveTab("popular")}
              className="rounded-r-none"
            >
              Popular
            </Button>
            <Button 
              variant={activeTab === "usa" ? "default" : "outline"}
              onClick={() => setActiveTab("usa")}
              className="rounded-none border-x-0"
            >
              USA
            </Button>
            <Button 
              variant={activeTab === "uk" ? "default" : "outline"}
              onClick={() => setActiveTab("uk")}
              className="rounded-l-none"
            >
              UK
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredUniversities.map((university) => (
            <div key={university.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={universityImages[university.id as keyof typeof universityImages] || "/placeholder.svg"} 
                  alt={university.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                <p className="text-gray-600 mb-4">{university.country}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">200+ Programs</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            View All Universities
          </Button>
        </div>
      </div>
    </section>
  );
};
