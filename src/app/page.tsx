import Image from 'next/image';
import Link from 'next/link';
import {
  Dribbble,
  DribbbleIcon as Behance,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Experience from '@/components/Experience';
import Posts from '@/components/Posts';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Header */}

      {/* Hero Section */}
      <section className='container mx-auto px-6 lg:px-12 h-[80vh] flex items-center'>
        <div className='max-w-4xl'>
          <div className='flex items-start space-x-8 mb-12'>
            <div className='relative'>
              <Image
                src='/rishi-profile.jpg'
                alt='Rishi Profile'
                width={240}
                height={240}
                className='rounded-full'
              />
            </div>
          </div>

          <h1 className='text-4xl lg:text-6xl font-medium mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent'>
            Hi I'm Rishi, Backend and App Developer
          </h1>

          <p className='text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed'>
            I am a backend and mobile app developer based in Bengaluru, India.
            Since 2022, I've been building{' '}
            <span className='text-foreground font-semibold'>
              scalable applications
            </span>{' '}
            using Golang, Spring Boot, and Flutter. I work on impactful projects
            through teams and hackathons. In my spare time, I enjoy going out
            with friends, playing badminton, watching football and exploring new places.
          </p>

          <Button
            variant='outline'
            className='bg-transparent border-border text-foreground hover:bg-accent'
          >
            Get in touch
            <ArrowRight className='w-4 h-4 ml-2' />
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Posts Section */}
      <div className='container mx-auto px-6 lg:px-12'>
        <Posts limit={3} />
      </div>

      {/* Newsletter Section */}
      <section className='px-6 lg:px-12 py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-8'>
                <Lightbulb className='w-8 h-8 text-accent-foreground' />
              </div>
              <h2 className='text-3xl lg:text-4xl font-bold mb-4 font-bricolage'>
                Have <span className='font-gochi'>Something</span>
                <br />
                Cool in Mind?
              </h2>
              <p className='text-muted-foreground mb-8'>
                This can be start of something great!!!
              </p>
              <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
                Let's Talk
                <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-4 font-bricolage'>
                📧 Subscribe to my newsletter
              </h3>
              <p className='text-muted-foreground mb-6'>
                Get important news and product updates directly to your inbox.
              </p>
              <div className='flex space-x-4'>
                <Input
                  type='email'
                  placeholder='Your email address'
                  className='bg-card border-border text-foreground placeholder-muted-foreground'
                />
                <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
                  Subscribe
                </Button>
              </div>
              <p className='text-xs text-muted-foreground mt-4'>
                You acknowledge that you are subscribing to this newsletter and
                by your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='px-6 lg:px-12 py-8 border-t border-border'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p className='text-muted-foreground text-sm'>
            © 2024 All rights reserved. Theme by Rishi Dev
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link
              href='/terms'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'
            >
              Terms and Privacy
            </Link>
            <Link
              href='/rss'
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'
            >
              RSS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
