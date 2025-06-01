"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Github,
  MessageCircle,
  MoreHorizontal,
  Monitor,
  Moon,
  Sun,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-6 lg:px-12 bg-background">
      <Link
        href="/"
        className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent flex justify-center items-center"
      >
        Rishi Chirchi
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="/about"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Projects
        </Link>

        {/* Social and Theme Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full h-8 w-8 p-0 transition-colors"
              aria-label="Open menu"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 mt-4 bg-card border border-border rounded-lg shadow-lg p-1 z-50"
            sideOffset={8}
          >
            {/* Socials */}
            {[
              {
                href: "https://github.com/rishichirchi",
                Icon: Github,
                label: "GitHub",
              },
              {
                href: "#",
                Icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "#",
                Icon: Twitter,
                label: "Twitter",
              },
              {
                href: "#",
                Icon: MessageCircle,
                label: "Medium",
              },
            ].map(({ href, Icon, label }) => (
              <DropdownMenuItem
                key={label}
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-primary/10 focus:bg-primary/20 transition-colors cursor-pointer"
                asChild
                role="menuitem"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </a>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator className="my-1" />

            {/* Theme Toggle */}
            <div className="flex items-center justify-around p-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-colors"
                onClick={() => setTheme("light")}
                aria-label="Set light theme"
              >
                <Sun className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-colors"
                onClick={() => setTheme("system")}
                aria-label="Set system theme"
              >
                <Monitor className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-colors"
                onClick={() => setTheme("dark")}
                aria-label="Set dark theme"
              >
                <Moon className="h-5 w-5" />
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full h-8 w-8 p-0 transition-colors"
              aria-label="Open menu"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 mt-4 bg-card border border-border rounded-lg shadow-lg p-1 z-50"
            sideOffset={8}
          >
            <DropdownMenuItem asChild>
              <Link href="/about" className="flex items-center gap-3 px-4 py-2">
                <span className="text-sm text-muted-foreground">About</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/blog" className="flex items-center gap-3 px-4 py-2">
                <span className="text-sm text-muted-foreground">Blog</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/projects"
                className="flex items-center gap-3 px-4 py-2"
              >
                <span className="text-sm text-muted-foreground">Projects</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-1" />
            {/* Socials */}
            {[
              {
                href: "https://github.com/rishichirchi",
                Icon: Github,
                label: "GitHub",
              },
              {
                href: "#",
                Icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "#",
                Icon: Twitter,
                label: "Twitter",
              },
              {
                href: "#",
                Icon: MessageCircle,
                label: "Medium",
              },
            ].map(({ href, Icon, label }) => (
              <DropdownMenuItem
                key={label}
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-primary/10 focus:bg-primary/20 transition-colors cursor-pointer"
                asChild
                role="menuitem"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </a>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="my-1" />
            {/* Theme Toggle */}
            <div className="flex items-center justify-around p-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-colors"
                onClick={() => setTheme("light")}
                aria-label="Set light theme"
              >
                <Sun className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-colors"
                onClick={() => setTheme("system")}
                aria-label="Set system theme"
              >
                <Monitor className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-colors"
                onClick={() => setTheme("dark")}
                aria-label="Set dark theme"
              >
                <Moon className="h-5 w-5" />
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
