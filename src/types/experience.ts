export interface Experience {
  company: string;
  logo?: string; // Optional, as we'll generate a default if not provided
  position: string;
  type: string;
  dateRange: string;
  duration: string;
  location: string;
  workType?: string; // Optional field
  description?: string; // Optional field
  skills?: string[]; // Optional array of skills
}
