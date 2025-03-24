
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { logoImage } from "../assets";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src={logoImage} alt="ApplyDreamscape" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold text-primary ml-2">ApplyDreamscape</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Find Programs</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Universities</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">How It Works</a>
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button className="bg-primary hover:bg-primary-dark text-white">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Find Programs</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Universities</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">How It Works</a>
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
