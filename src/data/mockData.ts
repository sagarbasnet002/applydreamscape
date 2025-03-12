
export const universities = [
  { id: 1, name: "Harvard University", country: "United States" },
  { id: 2, name: "University of Oxford", country: "United Kingdom" },
  { id: 3, name: "Stanford University", country: "United States" },
  { id: 4, name: "University of Cambridge", country: "United Kingdom" },
  { id: 5, name: "Massachusetts Institute of Technology", country: "United States" },
  { id: 6, name: "University of Toronto", country: "Canada" },
  { id: 7, name: "University of Melbourne", country: "Australia" },
  { id: 8, name: "ETH Zurich", country: "Switzerland" },
  { id: 9, name: "National University of Singapore", country: "Singapore" },
  { id: 10, name: "University of Tokyo", country: "Japan" }
];

export const programs = [
  { id: 1, name: "Computer Science", degree: "Bachelor's" },
  { id: 2, name: "Business Administration", degree: "Bachelor's" },
  { id: 3, name: "Artificial Intelligence", degree: "Master's" },
  { id: 4, name: "Mechanical Engineering", degree: "Bachelor's" },
  { id: 5, name: "Data Science", degree: "Master's" },
  { id: 6, name: "Medicine", degree: "Doctorate" },
  { id: 7, name: "Psychology", degree: "Bachelor's" },
  { id: 8, name: "International Relations", degree: "Master's" },
  { id: 9, name: "Environmental Science", degree: "Bachelor's" },
  { id: 10, name: "Architecture", degree: "Master's" }
];

export const countries = [
  { id: 1, name: "United States", continent: "North America" },
  { id: 2, name: "United Kingdom", continent: "Europe" },
  { id: 3, name: "Canada", continent: "North America" },
  { id: 4, name: "Australia", continent: "Oceania" },
  { id: 5, name: "Germany", continent: "Europe" },
  { id: 6, name: "France", continent: "Europe" },
  { id: 7, name: "Japan", continent: "Asia" },
  { id: 8, name: "Singapore", continent: "Asia" },
  { id: 9, name: "Switzerland", continent: "Europe" },
  { id: 10, name: "Netherlands", continent: "Europe" }
];

export const searchData = (category: string, query: string) => {
  if (!query) return [];
  
  const lowerCaseQuery = query.toLowerCase();
  
  switch (category) {
    case "universities":
      return universities.filter(uni => 
        uni.name.toLowerCase().includes(lowerCaseQuery) || 
        uni.country.toLowerCase().includes(lowerCaseQuery)
      );
    case "programs":
      return programs.filter(prog => 
        prog.name.toLowerCase().includes(lowerCaseQuery) || 
        prog.degree.toLowerCase().includes(lowerCaseQuery)
      );
    case "countries":
      return countries.filter(country => 
        country.name.toLowerCase().includes(lowerCaseQuery) || 
        country.continent.toLowerCase().includes(lowerCaseQuery)
      );
    default:
      return [];
  }
};
