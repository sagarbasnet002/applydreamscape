
import { SearchBar } from "./SearchBar";
import heroImage from "../assets/hero-background.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-light/10 to-white pt-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src={heroImage} alt="Students at university" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
          Your Global Education Journey
          <br />
          <span className="text-primary">Starts Here</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Find and apply to the best educational programs worldwide. Your dream education is just a search away.
        </p>
        
        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <SearchBar />
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {[
            { number: "1000+", label: "Universities" },
            { number: "50K+", label: "Programs" },
            { number: "100+", label: "Countries" },
            { number: "300K+", label: "Students Helped" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
