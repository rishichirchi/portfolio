export interface Project {
  id: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate?: string;
  category: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'planned';
}
