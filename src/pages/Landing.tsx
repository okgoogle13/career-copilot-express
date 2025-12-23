import { Link } from "react-router-dom";
import { motion, type Easing } from "framer-motion";
import snakePlant from "@/assets/snakeplant.png";
import plantVine from "@/assets/plant-vine.png";
import plantLeaves from "@/assets/plant-leaves.png";

// M3 Emphasized easing for expressive motion
const m3Emphasized: Easing = [0.2, 0.0, 0, 1.0];

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      ease: m3Emphasized,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: m3Emphasized,
      duration: 0.6
    }
  }
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden">
      {/* CSS Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Organic Blob Shapes - Background Layer */}
      {/* Large blob - left side */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 3, -2, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[600px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(138, 154, 91, 0.15) 0%, transparent 70%)",
          borderRadius: "60% 40% 55% 45% / 55% 45% 50% 50%",
          filter: "blur(40px)"
        }}
      />

      {/* Large blob - right side */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, -3, 2, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 2
        }}
        className="absolute -right-20 top-1/3 w-[450px] h-[550px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(208, 188, 255, 0.12) 0%, transparent 70%)",
          borderRadius: "45% 55% 40% 60% / 50% 60% 40% 50%",
          filter: "blur(50px)"
        }}
      />

      {/* Plant decorations - positioned around the hero */}
      {/* Top right - hanging vine */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute top-0 right-8 md:right-16 w-32 md:w-48 pointer-events-none z-10"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
        }}
      >
        <img src={plantVine} alt="" className="w-full h-auto opacity-70" />
      </motion.div>

      {/* Top left - leaves */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1
        }}
        className="absolute top-4 left-4 md:left-12 w-28 md:w-40 pointer-events-none z-10"
        style={{
          maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
        }}
      >
        <img src={plantLeaves} alt="" className="w-full h-auto opacity-60" />
      </motion.div>

      {/* Bottom left - snake plant */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 0.5
        }}
        className="absolute bottom-0 left-8 md:left-20 w-40 md:w-56 pointer-events-none z-10"
        style={{
          maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 100%)"
        }}
      >
        <img src={snakePlant} alt="" className="w-full h-auto opacity-60" />
      </motion.div>

      {/* Bottom right - secondary plant */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1.5
        }}
        className="absolute bottom-4 right-4 md:right-16 w-36 md:w-48 pointer-events-none z-10"
        style={{
          maskImage: "radial-gradient(circle at bottom center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at bottom center, black 30%, transparent 70%)"
        }}
      >
        <img src={plantLeaves} alt="" className="w-full h-auto opacity-50 scale-x-[-1]" />
      </motion.div>

      {/* Central Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 text-center px-6 max-w-2xl mx-auto"
      >
        {/* Hero Card - "The Container" shape with glassmorphism */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1E1E1E]/80 backdrop-blur-xl border border-[#49454F] p-8 md:p-12 rounded-[28px] shadow-2xl"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-extrabold text-white mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Welcome to your
            <br />
            <span className="text-[#D0BCFF]">personal digital</span>
            <br />
            ecosystem.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="text-[#938F99] text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A simple space to nurture your thoughts and organize your world. Sign in to continue growing.
          </motion.p>

          {/* Buttons - Variable shapes for M3 contrast */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary - Filled Tonal Sage (rounded-full = pill) */}
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center bg-[#8A9A5B] text-[#121212] font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#9AB065] hover:scale-105 text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sign In
            </Link>

            {/* Secondary - Outline with different radius (rounded-2xl = squircle) */}
            <Link
              to="#"
              className="inline-flex items-center justify-center border-2 border-[#49454F] text-[#E3E3E3] font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 hover:border-[#8A9A5B] hover:text-white hover:scale-105 text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Register
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative sparkle - bottom right corner */}
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute bottom-8 right-8 text-[#E3E3E3]/40 text-2xl pointer-events-none z-10"
      >
        ✦
      </motion.div>
    </div>
  );
};

export default Landing;
