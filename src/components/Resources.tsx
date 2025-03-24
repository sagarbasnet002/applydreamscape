
import { Calendar, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

export const Resources = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right University for Your Career Goals",
      excerpt: "Discover the key factors to consider when selecting a university that aligns with your future career aspirations.",
      date: "June 15, 2023",
      category: "Career Planning",
      image: blog1,
      icon: FileText
    },
    {
      id: 2,
      title: "Scholarship Application Tips from Successful Students",
      excerpt: "Learn proven strategies to increase your chances of winning scholarships for international education.",
      date: "July 22, 2023",
      category: "Scholarships",
      image: blog2,
      icon: Calendar
    },
    {
      id: 3,
      title: "Student Visa Guide: Everything You Need to Know",
      excerpt: "A comprehensive guide to navigating the student visa application process for studying abroad.",
      date: "August 10, 2023",
      category: "Visa Information",
      image: blog3,
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Helpful guides and articles to support your education journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <post.icon className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Button variant="link" className="p-0" size="sm">Read More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};
