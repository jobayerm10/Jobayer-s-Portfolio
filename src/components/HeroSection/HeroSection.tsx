import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden"
    >
      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full min-h-[calc(100dvh-4rem)] lg:min-h-0 flex-1 flex flex-col justify-end lg:justify-center items-center lg:items-start pb-4 sm:pb-6 lg:pb-12">
        {/* Left Content / Responsive Mobile Container */}
        <motion.div
          className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left justify-end lg:justify-center pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Available for work badge: bottom-left on mobile/tablet, top-left on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute left-3 sm:left-6 bottom-[10px] z-20 lg:static lg:bottom-auto lg:left-auto lg:mb-6"
          >
            <Badge
              variant="outline"
              size="lg"
              className="gap-2 py-1.5 px-3 sm:px-4 glass-panel border-foreground/15 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-muted-foreground whitespace-nowrap">
                Available for work
              </span>
            </Badge>
          </motion.div>

          {/* Hi, I'm Jobayer Mahmud (Placed above buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center lg:text-left w-full lg:w-auto z-10"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight mb-1 sm:mb-2">
              Hi, I'm
            </h1>

            {/* Light Theme: Clean Vibrant Gradient Text */}
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-3xl sm:text-4xl lg:text-[4vw] leading-tight block pb-1 select-none">
                Jobayer Mahmud
              </span>
            </div>

            {/* Dark Theme: Rich Lightswind Aurora Text Effect */}
            <div className="hidden dark:block">
              <AuroraTextEffect
                text="Jobayer Mahmud"
                fontSize="clamp(1.75rem, 4.5vw, 5.5rem)"
                className="bg-transparent overflow-visible p-0 justify-center lg:justify-start"
                textClassName="bg-gradient-to-r from-cyan-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-1 font-extrabold whitespace-nowrap"
              />
            </div>
          </motion.div>

          {/* Description text: Invisible in mobile/tablet view, visible on large screens */}
          <motion.p
            className="hidden lg:block text-lg lg:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I build exceptional and accessible digital experiences. Specialized
            in crafting premium web applications with elegant design systems.
          </motion.p>

          {/* Action Buttons: Stacked one by one at bottom for mobile/tablet, side-by-side on large screens */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-14 sm:mb-16 lg:mb-10 w-full max-w-[280px] sm:max-w-xs lg:max-w-none z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#projects" className="w-full lg:w-auto inline-block">
              <Button
                size="lg"
                className="w-full lg:w-auto relative z-10 text-sm lg:text-[1vw] px-6 py-3 border-2 rounded-md border-black bg-black text-white transition-all duration-300 ease-out hover:bg-zinc-900 hover:text-white hover:px-8 cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                View Works <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume@main/Jobayer_mahmud-resume.pdf?download=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full lg:w-auto relative z-10 text-sm lg:text-[1vw] px-6 py-3 border-2 rounded-md border-gray-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 text-black dark:text-white transition-all duration-300 ease-out hover:px-8 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                Resume <Download className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          {/* Social Links: right-0 bottom-[10px] horizontally on mobile/tablet, horizontal on large screens */}
          <motion.div className="absolute right-3 sm:right-6 bottom-[10px] z-20 flex items-center gap-3 sm:gap-4 lg:static lg:bottom-auto lg:right-auto lg:gap-5 justify-end lg:justify-start w-auto">
            {[
              { Icon: Github, href: "https://github.com/jobayerm10" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/jobayermahmud/",
              },
              { Icon: Mail, href: "mailto:jobayermahmud@gmail.com" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer group font-medium text-muted-foreground hover:text-foreground"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="w-full relative z-10 mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};
