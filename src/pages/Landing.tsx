import { Link } from "react-router-dom";
import { motion, type Easing } from "framer-motion";
import snakePlant from "@/assets/snakeplant.png";
import plantVine from "@/assets/plant-vine.png";
import plantLeaves from "@/assets/plant-leaves.png";
import plantAngular from "@/assets/plant-angular.png";

// M3 Emphasized easing for expressive motion
const m3Emphasized: Easing = [0.2, 0.0, 0, 1.0];

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: m3Emphasized,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: m3Emphasized,
      duration: 0.7
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

      {/* ORGANIC BLOB SHAPES - Irregular amoeba-like forms */}
      
      {/* Main left blob - large irregular shape */}
      <motion.div
        animate={{
          scale: [1, 1.08, 0.97, 1],
          rotate: [0, 5, -3, 0],
          x: [0, 15, -10, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[55vw] h-[70vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 60% 50%, rgba(138, 154, 91, 0.25) 0%, rgba(138, 154, 91, 0.08) 40%, transparent 70%)",
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          filter: "blur(30px)"
        }}
      />

      {/* Top right blob - purple glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, -8, 4, 0],
          y: [0, 20, -15, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 3
        }}
        className="absolute -right-10 -top-10 w-[45vw] h-[50vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 40% 60%, rgba(208, 188, 255, 0.2) 0%, rgba(208, 188, 255, 0.05) 50%, transparent 70%)",
          borderRadius: "41% 59% 35% 65% / 62% 38% 62% 38%",
          filter: "blur(35px)"
        }}
      />

      {/* Bottom blob - sage accent */}
      <motion.div
        animate={{
          scale: [1, 0.95, 1.06, 1],
          rotate: [0, 4, -6, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1
        }}
        className="absolute left-1/4 -bottom-20 w-[50vw] h-[40vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(138, 154, 91, 0.18) 0%, transparent 60%)",
          borderRadius: "52% 48% 61% 39% / 39% 56% 44% 61%",
          filter: "blur(25px)"
        }}
      />

      {/* Small floating accent blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 0.9, 1],
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 5
        }}
        className="absolute right-1/4 bottom-1/4 w-[20vw] h-[25vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(208, 188, 255, 0.15) 0%, transparent 60%)",
          borderRadius: "67% 33% 45% 55% / 48% 62% 38% 52%",
          filter: "blur(20px)"
        }}
      />

      {/* PLANT DECORATIONS - Arranged like the reference */}
      
      {/* Top left - hanging vine draping down */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute -top-4 left-0 w-36 md:w-52 pointer-events-none z-20"
        style={{
          transformOrigin: "top center"
        }}
      >
        <img src={plantVine} alt="" className="w-full h-auto opacity-80" />
      </motion.div>

      {/* Top right - another hanging plant */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [3, -3, 3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1.5
        }}
        className="absolute -top-2 right-4 md:right-12 w-32 md:w-44 pointer-events-none z-20"
        style={{
          transformOrigin: "top right"
        }}
      >
        <img src={plantLeaves} alt="" className="w-full h-auto opacity-75 scale-x-[-1]" />
      </motion.div>

      {/* Left side - tall plant reaching up */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 5, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 0.5
        }}
        className="absolute bottom-0 left-4 md:left-16 w-48 md:w-72 pointer-events-none z-20"
      >
        <img src={snakePlant} alt="" className="w-full h-auto opacity-85" />
      </motion.div>

      {/* Bottom center-left - angular plant */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [-1, 2, -1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 2
        }}
        className="absolute bottom-0 left-1/4 w-40 md:w-56 pointer-events-none z-10"
      >
        <img src={plantAngular} alt="" className="w-full h-auto opacity-70" />
      </motion.div>

      {/* Right side - plant cluster */}
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          x: [0, -8, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 3
        }}
        className="absolute bottom-0 right-4 md:right-12 w-44 md:w-64 pointer-events-none z-20"
      >
        <img src={plantLeaves} alt="" className="w-full h-auto opacity-80" />
      </motion.div>

      {/* Far right corner - small accent plant */}
      <motion.div
        animate={{ 
          y: [0, -6, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 4
        }}
        className="absolute bottom-8 right-1/4 w-24 md:w-32 pointer-events-none z-10"
      >
        <img src={plantVine} alt="" className="w-full h-auto opacity-60 rotate-180" />
      </motion.div>

      {/* Central Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-30 text-center px-4 max-w-xl mx-auto"
      >
        {/* Hero Card - "The Container" shape with stronger glassmorphism */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1E1E1E]/90 backdrop-blur-2xl border border-[#49454F]/60 p-8 md:p-10 rounded-[32px] shadow-2xl"
          style={{
            boxShadow: "0 25px 80px -20px rgba(0, 0, 0, 0.6), 0 0 60px -15px rgba(138, 154, 91, 0.15)"
          }}
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-extrabold text-white mb-5"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 5.5vw, 3rem)",
              lineHeight: 1.15,
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
            className="text-[#A8A5AD] text-sm md:text-base mb-7 max-w-sm mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A simple space to nurture your thoughts and organize your world. Sign in to continue growing.
          </motion.p>

          {/* Buttons - Contrasting shapes (pill vs squircle) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            {/* Primary - Filled Tonal Sage (fully rounded pill) */}
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center bg-[#8A9A5B] text-[#121212] font-bold px-10 py-3.5 rounded-full transition-all duration-300 hover:bg-[#9AB065] hover:scale-105 hover:shadow-lg hover:shadow-[#8A9A5B]/20 text-sm md:text-base"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Sign In
            </Link>

            {/* Secondary - Outline with squircle shape */}
            <Link
              to="#"
              className="inline-flex items-center justify-center border-2 border-[#49454F] text-[#E3E3E3] font-semibold px-10 py-3.5 rounded-[16px] transition-all duration-300 hover:border-[#8A9A5B] hover:text-white hover:scale-105 text-sm md:text-base"
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
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute bottom-6 right-6 text-[#E3E3E3]/50 text-xl pointer-events-none z-10"
      >
        ✦
      </motion.div>

      {/* Additional sparkle accents */}
      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 2
        }}
        className="absolute top-1/4 right-1/3 text-[#D0BCFF]/30 text-sm pointer-events-none z-10"
      >
        ✦
      </motion.div>
    </div>
  );
};

export default Landing;
