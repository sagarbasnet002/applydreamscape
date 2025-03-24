
import { Check, Globe, Users, Award, BookOpen } from "lucide-react";
import studentsImage from "../assets/students.jpg";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to 1000+ universities across 100+ countries worldwide"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our education counselors provide personalized support throughout your application journey"
    },
    {
      icon: Award,
      title: "Success Rate",
      description: "95% application success rate with our guided process"
    },
    {
      icon: BookOpen,
      title: "Program Variety",
      description: "50,000+ diverse programs to match your academic goals and career aspirations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose ApplyDreamscape?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're dedicated to making your international education journey seamless and successful.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={studentsImage} 
                alt="Happy international students" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 text-lg font-bold text-primary">
                <Check className="w-5 h-5" />
                Trusted by 300,000+ students
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
