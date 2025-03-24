
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Master's in Data Science, University of Toronto",
      image: student1,
      text: "ApplyDreamscape made my application process incredibly smooth. Their counselors helped me choose the right program and guided me through every step. I couldn't have done it without them!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Bachelor's in Business Administration, Oxford University",
      image: student2,
      text: "I was overwhelmed by the international application process until I found ApplyDreamscape. Their team helped me secure a scholarship that made my dream of studying abroad a reality.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "PhD in Computer Science, Stanford University",
      image: student3,
      text: "The personalized guidance I received from ApplyDreamscape was exceptional. They understood my academic goals perfectly and matched me with programs that aligned with my research interests.",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-primary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Success stories from students who achieved their education dreams with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-600 text-center text-sm mt-1">{testimonials[activeIndex].role}</p>
                <div className="flex items-center mt-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 italic mb-6">"{testimonials[activeIndex].text}"</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
              <ChevronLeft />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full p-0 min-w-0 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
            <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
