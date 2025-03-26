
import { Mail, Phone, Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <div className="bg-primary-dark text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap gap-4 md:gap-6 items-center">
          <a href="mailto:info@applydreamscape.com" className="flex items-center gap-1 hover:text-gray-200 transition-colors">
            <Mail size={14} />
            <span>info@applydreamscape.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-gray-200 transition-colors">
            <Phone size={14} />
            <span>+1 (234) 567-890</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4 mt-1 sm:mt-0">
          <div className="flex items-center gap-1">
            <Globe size={14} />
            <Select defaultValue="en">
              <SelectTrigger className="bg-transparent border-none text-white h-6 w-20 px-1">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Link to="/login" className="hover:text-gray-200 transition-colors">Login</Link>
        </div>
      </div>
    </div>
  );
};
