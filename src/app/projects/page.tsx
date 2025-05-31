import Projects from '@/components/Projects';
import { getProjects } from '@/data/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Rishi Dev',
  description:
    'A collection of my latest projects and work in backend development, mobile apps, and data engineering.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='container mx-auto px-6 lg:px-12 py-16 lg:py-24'>
        <div className='max-w-6xl mx-auto'>
          <header className='mb-16'>
            <h1 className='text-4xl lg:text-6xl font-bold mb-6 font-bricolage'>
              Projects
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl leading-relaxed'>
              A collection of my latest projects spanning backend development,
              mobile applications, data engineering, and fintech solutions. Each
              project represents a unique challenge and learning experience.
            </p>
          </header>

          <Projects limit={projects.length} showTitle={false} />
        </div>
      </div>
    </div>
  );
}
