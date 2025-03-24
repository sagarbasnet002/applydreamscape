
import trustBadge1 from "../assets/trust-badge1.png";
import trustBadge2 from "../assets/trust-badge2.png";
import trustBadge3 from "../assets/trust-badge3.png";
import trustBadge4 from "../assets/trust-badge4.png";

export const TrustBadges = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Trusted by Students and Institutions Worldwide
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img src={trustBadge1} alt="Trust Badge 1" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
          <img src={trustBadge2} alt="Trust Badge 2" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
          <img src={trustBadge3} alt="Trust Badge 3" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
          <img src={trustBadge4} alt="Trust Badge 4" className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
    </section>
  );
};
