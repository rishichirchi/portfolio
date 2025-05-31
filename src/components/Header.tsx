'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Github, MessageCircle, Dribbble, MoreHorizontal } from 'lucide-react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header className='flex items-center justify-between p-6 lg:px-12 bg-background'>
      {' '}
      <Link
        href='/'
        className='text-4xl flex justify-center items-center font-bold font-gochi text-foreground'
      >
        Rishi Chirchi
      </Link>
      <nav className='hidden md:flex items-center space-x-4 bg-sidebar border border-border p-2 px-8 rounded-full'>
        <Link
          href='/about'
          className='text-muted-foreground hover:text-foreground transition-colors'
        >
          About
        </Link>
        <Link
          href='/blog'
          className='text-muted-foreground hover:text-foreground transition-colors'
        >
          Blog
        </Link>
        <Link
          href='/projects'
          className='text-muted-foreground hover:text-foreground transition-colors'
        >
          Projects
        </Link>
        <Link
          href='/resume'
          className='text-muted-foreground hover:text-foreground transition-colors'
        >
          Resume
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='link'
              size='sm'
              className='text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full h-8 w-8 p-0'
            >
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            className='w-32 mt-4 bg-card border border-border'
          >
            <DropdownMenuItem className='flex items-center cursor-pointer'>
              <Github className='mr-2 h-4 w-4' />
              Github
            </DropdownMenuItem>
            <DropdownMenuItem className='flex items-center cursor-pointer'>
              <MessageCircle className='mr-2 h-4 w-4' />
              Threads
            </DropdownMenuItem>
            <DropdownMenuItem className='flex items-center cursor-pointer'>
              <Dribbble className='mr-2 h-4 w-4' />
              Dribbble
            </DropdownMenuItem>{' '}
            <DropdownMenuItem className='flex items-center cursor-pointer'>
              <svg
                viewBox='0 0 24 24'
                className='mr-2 h-4 w-4'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M7.443 5.35c.639 0 1.23.05 1.77.15.54.1.995.274 1.364.524.37.25.659.584.868 1.002.209.417.313.934.313 1.55 0 .667-.153 1.223-.46 1.669-.306.445-.77.81-1.393 1.095.84.244 1.456.637 1.85 1.18.394.544.591 1.2.591 1.968 0 .625-.118 1.162-.355 1.613-.236.45-.562.819-.974 1.104-.413.286-.89.5-1.432.643a6.79 6.79 0 0 1-1.67.213H3V5.35h4.443Zm-.262 4.678c.52 0 .95-.118 1.287-.356.34-.237.51-.623.51-1.158 0-.3-.054-.547-.16-.743a1.075 1.075 0 0 0-.46-.467 1.926 1.926 0 0 0-.697-.242 4.992 4.992 0 0 0-.857-.072H5.345v3.038h1.836Zm.197 4.979c.326 0 .626-.03.9-.09.277-.06.512-.162.71-.306a1.433 1.433 0 0 0 .467-.59c.11-.25.166-.563.166-.94 0-.753-.207-1.286-.622-1.6-.414-.314-.973-.47-1.678-.47H5.345v3.996h2.033Zm9.851 1.315c.37.366.898.552 1.584.552.496 0 .924-.125 1.283-.375.36-.25.583-.515.667-.797h2.204c-.353 1.094-.893 1.878-1.62 2.352-.726.473-1.602.71-2.627.71-.713 0-1.356-.114-1.93-.342a4.066 4.066 0 0 1-1.484-.975 4.35 4.35 0 0 1-.97-1.522c-.225-.59-.338-1.235-.338-1.934 0-.7.113-1.346.338-1.93a4.385 4.385 0 0 1 .97-1.535c.414-.435.909-.776 1.484-1.026a4.876 4.876 0 0 1 1.93-.365c.78 0 1.466.151 2.058.455a4.17 4.17 0 0 1 1.493 1.23c.406.517.7 1.112.879 1.784.18.671.237 1.385.173 2.142h-6.588c0 .754.207 1.463.576 1.83Zm2.818-6.32c-.295-.323-.794-.484-1.4-.484-.397 0-.727.067-.99.2-.26.134-.47.299-.627.494-.157.196-.266.405-.328.628a2.164 2.164 0 0 0-.09.494h3.933c-.118-.6-.363-1.008-.657-1.331ZM13.44 5.911h4.724v1.143H13.44v-1.143Z' />
              </svg>
              Behance
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className='flex items-center justify-between px-2 py-1.5'>
              <Button
                variant='link'
                size='icon'
                className='rounded-full hover:bg-secondary h-8 w-8'
                onClick={() => setTheme('light')}
              >
                <Sun className='h-4 w-4' />
              </Button>
              <Button
                variant='link'
                size='icon'
                className='rounded-full hover:bg-secondary h-8 w-8'
                onClick={() => setTheme('system')}
              >
                <Monitor className='h-4 w-4' />
              </Button>
              <Button
                variant='link'
                size='icon'
                className='rounded-full hover:bg-secondary h-8 w-8'
                onClick={() => setTheme('dark')}
              >
                <Moon className='h-4 w-4' />
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Header;
