
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "Programs": [
      { name: "Undergraduate", href: "#" },
      { name: "Master's", href: "#" },
      { name: "PhD", href: "#" },
      { name: "Diploma", href: "#" },
      { name: "Certificate", href: "#" }
    ],
    "Universities": [
      { name: "United States", href: "#" },
      { name: "United Kingdom", href: "#" },
      { name: "Canada", href: "#" },
      { name: "Australia", href: "#" },
      { name: "Europe", href: "#" }
    ],
    "Resources": [
      { name: "Student Guide", href: "#" },
      { name: "Visa Information", href: "#" },
      { name: "Scholarships", href: "#" },
      { name: "Blog", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    "Company": [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };
  
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">ApplyDreamscape</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner for international education opportunities. We help students
              achieve their dreams of studying at the world's top universities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400 w-5 h-5" />
                <span className="text-gray-300">info@applydreamscape.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400 w-5 h-5" />
                <span className="text-gray-300">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-400 w-5 h-5" />
                <span className="text-gray-300">123 Education St., Toronto, Canada</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold text-white mb-3">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input placeholder="Your email address" className="bg-gray-800 border-gray-700" />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>© {currentYear} ApplyDreamscape. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
