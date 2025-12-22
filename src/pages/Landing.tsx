import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ClipboardList, FileCheck, BarChart3, ArrowRight, Book } from "lucide-react";
import snakePlant from "@/assets/snakeplant.png";
import plantBanner from "@/assets/plantbanner-footer.png";
import FloatingNav from "@/components/landing/FloatingNav";

const toolkitCards = [
  {
    icon: ClipboardList,
    title: "Selection Criteria",
    description: "Drafting STAR responses for Government roles.",
  },
  {
    icon: FileText,
    title: "Resume Tailoring",
    description: "Automating the tedious process of customizing your resume to suit a specific position description.",
  },
  {
    icon: FileCheck,
    title: "Cover Letter Generation",
    description: "Automate the painful task of drafting authentic, tailored cover letters for a particular job application.",
  },
  {
    icon: BarChart3,
    title: "ATS Analysis",
    description: "Mirrors features and functionality for Jobscan — see how well your resume matches a job opportunity.",
  },
];

// M3 Emphasized easing
const m3Emphasized = [0.2, 0.0, 0, 1.0] as const;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: m3Emphasized,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: m3Emphasized,
      duration: 0.6,
    },
  },
};

const cardHoverTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    borderColor: "#49454F",
    transition: cardHoverTransition,
  },
  hover: {
    scale: 1.02,
    borderColor: "#8A9A5B",
    transition: cardHoverTransition,
  },
};

const Landing = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for the plant image
  const plantY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const plantRotate = useTransform(scrollYProgress, [0, 0.5], [0, 3]);
  
  // Footer slide up effect
  const footerY = useTransform(scrollYProgress, [0.6, 1], [40, 0]);

  return (
    <div className="relative min-h-screen bg-[#121212] overflow-hidden">
      {/* Floating Navigation */}
      <FloatingNav />

      {/* CSS Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 pt-32">
          {/* Snake Plant - Bottom Right with Parallax */}
          <motion.div
            style={{ y: plantY, rotate: plantRotate }}
            className="absolute bottom-0 right-0 w-[300px] md:w-[400px] lg:w-[500px] pointer-events-none"
          >
            <div
              className="w-full h-full"
              style={{
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              <img
                src={snakePlant}
                alt=""
                className="w-full h-auto object-contain opacity-60"
              />
            </div>
          </motion.div>

          {/* Hero Content - "The Leaf" Shape */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative max-w-3xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#1E1E1E] border border-[#49454F] p-8 md:p-12 lg:p-16 rounded-tl-3xl rounded-tr-[4rem] rounded-br-3xl rounded-bl-lg"
            >
              {/* Tagline */}
              <motion.span
                variants={itemVariants}
                className="inline-block font-mono text-xs tracking-widest uppercase text-[#D0BCFF] mb-6"
              >
                BETA V1 // CASEWORKER TOOLS
              </motion.span>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-extrabold text-white leading-tight mb-6"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Focus on People,
                <br />
                Not the Paperwork.
              </motion.h1>

              {/* Subhead */}
              <motion.p
                variants={itemVariants}
                className="text-[#938F99] text-lg mb-8 max-w-xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                A dedicated command center for the Australian Community Services
                sector. Manage Key Selection Criteria, case logs, and WWCC checks.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                {/* Primary - Sage Green Pill */}
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 bg-[#8A9A5B] text-[#121212] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#9AB065] hover:scale-105"
                >
                  Enter Workspace
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Secondary - Outline Pill */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-[#49454F] text-[#E3E3E3] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:border-[#8A9A5B] hover:text-white"
                >
                  <Book className="w-5 h-5" />
                  Documentation
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* TOOLKIT GRID SECTION */}
        <section id="toolkit" className="relative px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Section Title */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-block font-mono text-xs tracking-widest uppercase text-[#D0BCFF] mb-4">
                YOUR TOOLKIT
              </span>
              <h2
                className="font-extrabold text-white"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Tools built for the work you actually do
              </h2>
            </motion.div>

            {/* Grid - "The Tech" Shape (16px radius) */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {toolkitCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  custom={index}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="h-full bg-[#2C2C2C] border border-[#49454F] rounded-[16px] p-6 cursor-pointer"
                    style={{ borderColor: "#49454F" }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#8A9A5B]/30">
                      <card.icon className="w-6 h-6 text-[#8A9A5B]" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-white font-semibold mb-3"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[#938F99] text-sm leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* FOOTER with Plant Banner */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative mt-20"
        >
          {/* Gradient Mask Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to bottom, #121212 0%, transparent 30%)",
            }}
          />

          {/* Plant Banner Image with slide up effect */}
          <motion.div style={{ y: footerY }} className="relative">
            <img
              src={plantBanner}
              alt=""
              className="w-full h-auto object-cover"
            />

            {/* Footer Content Overlay */}
            <motion.div
              variants={itemVariants}
              className="absolute inset-0 flex items-end justify-center pb-8 z-20"
            >
              <div className="text-center">
                <p className="font-mono text-xs tracking-widest uppercase text-[#938F99] mb-2">
                  CAREER COPILOT
                </p>
                <p
                  className="text-[#49454F] text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Built for Australian Social Workers
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Landing;
