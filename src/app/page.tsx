import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Posts from "@/components/Posts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 h-[80vh] flex items-center">
        <div className="max-w-4xl">
          <div className="flex items-start space-x-8 mb-12">
            <div className="relative">
              <Image
                src="/rishi-profile.jpg"
                alt="Rishi Profile"
                width={240}
                height={240}
                className="rounded-full"
              />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-medium mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/30 bg-clip-text text-transparent">
            Hi I'm Rishi, Backend and App Developer
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            I am a backend and mobile app developer based in Bengaluru, India.
            Since 2022, I've been building{" "}
            <span className="text-foreground font-semibold">
              scalable applications
            </span>{" "}
            using Golang, Spring Boot, and Flutter. I work on impactful projects
            through teams and hackathons. In my spare time, I enjoy going out
            with friends, playing badminton, watching football, and exploring
            new places.
          </p>

          <Link href="/resume.pdf" passHref target="_blank">
            <Button
              variant="outline"
              className="bg-transparent border-border text-foreground hover:bg-accent"
            >
              My Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <TechStack />

      {/* Experience Section */}
      <Experience />

      {/* Posts Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <Posts limit={3} />
      </div>

      {/* Contact Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-8">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-bricolage leading-tight">
                Have <span className="font-gochi">Something</span>
                <br /> Cool in Mind?
              </h2>
              <p className="text-sm lg:text-base text-muted-foreground mb-8 leading-relaxed">
                Let’s bring your ideas to life. Whether it’s a project,
                opportunity, or just a conversation — I’d love to hear from you.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-muted rounded-xl p-6 shadow-sm border border-border">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground placeholder:text-sm lg:placeholder:text-base placeholder:leading-relaxed font-sans"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground placeholder:text-sm lg:placeholder:text-base placeholder:leading-relaxed font-sans"
                />
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border bg-card border-border text-foreground placeholder:text-muted-foreground placeholder:text-sm lg:placeholder:text-base placeholder:leading-relaxed font-sans focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm lg:text-base"
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 All rights reserved. Theme by Rishi Dev
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms and Privacy
            </Link>
            <Link
              href="/rss"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              RSS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
