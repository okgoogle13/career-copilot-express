import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ClipboardList, FileCheck, BarChart3, ArrowRight, Book } from "lucide-react";
import snakePlant from "@/assets/snakeplant.png";
import plantBanner from "@/assets/plantbanner-footer.png";
import FloatingNav from "@/components/landing/FloatingNav";
const toolkitCards = [{
  icon: ClipboardList,
  title: "Selection Criteria",
  description: "STAR responses for Government roles."
}, {
  icon: FileText,
  title: "Resume Tailoring",
  description: "Customized for each position description."
}, {
  icon: FileCheck,
  title: "Cover Letters",
  description: "Authentic, tailored cover letters."
}, {
  icon: BarChart3,
  title: "ATS Analysis",
  description: "Match score against job opportunities."
}];

// M3 Emphasized easing
const m3Emphasized = [0.2, 0.0, 0, 1.0] as const;

// Animation variants - snappy for single viewport
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: m3Emphasized,
      duration: 0.35
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: m3Emphasized,
      duration: 0.35
    }
  }
};
const cardHoverTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25
};
const cardHoverVariants = {
  rest: {
    scale: 1,
    borderColor: "#49454F",
    transition: cardHoverTransition
  },
  hover: {
    scale: 1.02,
    borderColor: "#8A9A5B",
    transition: cardHoverTransition
  }
};
const Landing = () => {
  const {
    scrollYProgress
  } = useScroll();

  // Subtle floating animation for plant
  const plantY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  return <div className="h-screen overflow-hidden bg-[#121212] flex flex-col relative">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* CSS Noise Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
      opacity: 0.04,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
    }} />

      {/* Main Content - Single Viewport Layout */}
      <main className="flex-1 flex flex-col relative z-10 pt-14 px-4 md:px-8">
        {/* HERO SECTION - Overlapping Stack */}
        <section className="flex-1 flex items-center justify-center relative">
          {/* Background Plant - Centered with Radial Fade */}
          <motion.div style={{
          y: plantY
        }} animate={{
          y: [0, -6, 0]
        }} transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[280px] md:w-[350px] lg:w-[420px] translate-x-8 md:translate-x-16" style={{
            maskImage: "radial-gradient(circle at center, black 15%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 15%, transparent 65%)"
          }}>
              <img src={snakePlant} alt="" className="w-full h-auto object-contain opacity-50" />
            </div>
          </motion.div>

          {/* Hero Content - "The Leaf" Shape with Glassmorphism */}
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative max-w-xl mx-auto z-10">
            <motion.div variants={itemVariants} className="bg-[#1E1E1E]/30 backdrop-blur-2xl border border-[#49454F] px-6 py-5 md:px-8 md:py-6 rounded-tl-3xl rounded-tr-[4rem] rounded-br-3xl rounded-bl-lg">
              {/* Tagline */}
              <motion.span variants={itemVariants} className="inline-block font-mono text-[10px] tracking-widest uppercase text-[#D0BCFF] mb-3">FML</motion.span>

              {/* Headline */}
              <motion.h1 variants={itemVariants} className="font-extrabold text-white mb-3" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "3.25rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}>Stop procrastinating. Get a job.<br />
                Not the Paperwork.
              </motion.h1>

              {/* Subhead */}
              <motion.p variants={itemVariants} className="text-[#938F99] text-sm mb-4 max-w-md leading-relaxed" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>F ML</motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                {/* Primary - Sage Green Pill */}
                <Link to="/dashboard" className="inline-flex items-center gap-2 bg-[#8A9A5B] text-[#121212] font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-[#9AB065] hover:scale-105 text-sm">Sign In<ArrowRight className="w-4 h-4" />
                </Link>

                {/* Secondary - Outline Pill */}
                <a href="#" className="inline-flex items-center gap-2 border border-[#49454F] text-[#E3E3E3] font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:border-[#8A9A5B] hover:text-white text-sm">Register<Book className="w-4 h-4" />
                  Documentation
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* TOOLKIT GRID - Compact */}
        <motion.section id="toolkit" initial="hidden" animate="visible" variants={containerVariants} className="py-4">
          <motion.div variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {toolkitCards.map((card, index) => <motion.div key={index} variants={itemVariants} initial="rest" whileHover="hover" animate="rest">
                <motion.div variants={cardHoverVariants} className="h-full bg-[#2C2C2C] border border-[#49454F] rounded-[16px] p-4 cursor-pointer" style={{
              borderColor: "#49454F"
            }}>
                  {/* Icon */}
                  <div className="w-8 h-8 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center mb-2">
                    <card.icon className="w-4 h-4 text-[#8A9A5B]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-sm mb-1" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600
              }}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#938F99] text-xs leading-snug" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                    {card.description}
                  </p>
                </motion.div>
              </motion.div>)}
          </motion.div>
        </motion.section>
      </main>

      {/* FOOTER - Anchored to Bottom */}
      <motion.footer initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.3,
      duration: 0.4,
      ease: m3Emphasized
    }} className="relative w-full flex-shrink-0" style={{
      maxHeight: "120px"
    }}>
        {/* Gradient Mask Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "linear-gradient(to bottom, #121212 0%, transparent 50%)"
      }} />

        {/* Plant Banner Image */}
        <img src={plantBanner} alt="" className="w-full h-[120px] object-cover object-top" />

        {/* Footer Text */}
        <div className="absolute inset-0 flex items-end justify-center pb-3 z-20">
          <p className="font-mono text-[10px] tracking-widest uppercase text-[#49454F]">
            CAREER COPILOT • Built for Australian Social Workers
          </p>
        </div>
      </motion.footer>
    </div>;
};
export default Landing;