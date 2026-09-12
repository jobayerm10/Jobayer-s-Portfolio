import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { HangingIdCard } from "../lightswind/HangingIdCard";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import { DotPattern } from "../lightswind/dot-pattern";
import image from "../../assets/heroimg2.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden "
    >
      {/* Background Dot Pattern with Radial Vignette Shade */}
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge
              variant="outline"
              size="lg"
              className="gap-2.5 py-1.5 px-4 glass-panel border-foreground/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Available for work
              </span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Hi, I'm
            </h1>

            {/* Light Theme: Clean Vibrant Gradient Text */}
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-violet-600  via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-[4vw] leading-none tracking-tight block pb-2 select-none">
                Jobayer Mahmud
              </span>
            </div>

            {/* Dark Theme: Rich Lightswind Aurora Text Effect */}
            <div className="hidden dark:block">
              <AuroraTextEffect
                text="Jobayer Mahmud"
                fontSize="clamp(2.25rem, 5.5vw, 5.5rem)"
                className="bg-transparent overflow-visible p-0 justify-start"
                textClassName="bg-gradient-to-r from-cyan-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-2 font-extrabold whitespace-nowrap"
              />
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I build exceptional and accessible digital experiences. Specialized
            in crafting premium web applications with elegant design systems.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#projects" className="inline-block">
              <Button
                size="lg"
                className="relative z-10 text-sm lg:text-[1vw] px-6 py-3 border-2 rounded-md border-black bg-black text-white transition-all duration-300 ease-out hover:bg-zinc-900 hover:text-white hover:px-10 cursor-pointer"
              >
                View Works <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://cdn.jsdelivr.net/gh/jobayerm10/Jobayer-Mahmud-Resume@main/Jobayer_mahmud-resume.pdf?download=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="relative z-10   text-sm lg:text-[1vw] px-6 py-3 border-2 rounded-md border-gray-300 text-black transition-all duration-300 ease-out hover:text-black hover:px-10 cursor-pointer"
              >
                Resume <Download className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto">
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
                className="transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer  group  font-medium text-muted-foreground"
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Hanging ID Card */}

      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="w-full relative z-10 mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};
