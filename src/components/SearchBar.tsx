
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { searchData } from "@/data/mockData";

type SearchCategory = "programs" | "universities" | "countries";

interface SearchResult {
  id: number;
  name: string;
  [key: string]: any;
}

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState<SearchCategory>("programs");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle clicks outside of the search component to hide results
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Update search results when query or category changes
    if (searchQuery.length > 1) {
      const results = searchData(searchCategory, searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery, searchCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "in category:", searchCategory);
    // Here you would typically connect to your backend API
    setShowResults(false);
  };

  const handleResultClick = (result: SearchResult) => {
    setSearchQuery(result.name);
    setShowResults(false);
    console.log("Selected:", result);
    // Here you could navigate to a details page
  };

  return (
    <div className="w-full relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="w-full">
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-lg">
          <Select
            value={searchCategory}
            onValueChange={(value) => setSearchCategory(value as SearchCategory)}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="programs">Programs</SelectItem>
              <SelectItem value="universities">Universities</SelectItem>
              <SelectItem value="countries">Countries</SelectItem>
            </SelectContent>
          </Select>
          
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${searchCategory}...`} 
            className="flex-grow text-lg"
          />
          
          <Button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </div>
      </form>

      {showResults && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-80 overflow-y-auto">
          <ul className="py-2">
            {searchResults.map((result) => (
              <li 
                key={result.id} 
                onClick={() => handleResultClick(result)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="font-medium">{result.name}</div>
                <div className="text-sm text-gray-500">
                  {searchCategory === "universities" && result.country}
                  {searchCategory === "programs" && result.degree}
                  {searchCategory === "countries" && result.continent}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
