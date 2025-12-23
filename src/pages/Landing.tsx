import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import snakePlant from "@/assets/snakeplant.png";
import plantVine from "@/assets/plant-vine.png";
import plantLeaves from "@/assets/plant-leaves.png";
import plantAngular from "@/assets/plant-angular.png";

// M3 Emphasized easing - organic, expressive motion
const m3Emphasized = [0.2, 0, 0, 1.0] as const;

// Blob configurations - staggered timing, irregular organic shapes
const blobs = [
  {
    id: 1,
    color: "#D0BCFF", // Soft lilac
    size: "w-[520px] h-[420px]",
    position: "top-[2%] left-[3%]",
    duration: 18,
    delay: 0,
    translateX: [0, 45, -25, 35, 0],
    translateY: [0, -35, 25, -45, 0],
    scale: [1, 1.05, 0.95, 1.03, 1],
    rotate: [0, 10, -6, 4, 0],
    borderRadius: "62% 38% 70% 30% / 42% 58% 32% 68%",
  },
  {
    id: 2,
    color: "#8A9A5B", // Sage green
    size: "w-[480px] h-[540px]",
    position: "top-[12%] right-[5%]",
    duration: 23,
    delay: 2.5,
    translateX: [0, -40, 30, -20, 0],
    translateY: [0, 30, -40, 20, 0],
    scale: [1, 0.96, 1.04, 0.98, 1],
    rotate: [45, 55, 35, 50, 45],
    borderRadius: "45% 55% 38% 62% / 55% 42% 58% 45%",
  },
  {
    id: 3,
    color: "#B8A9E1", // Muted lilac
    size: "w-[400px] h-[450px]",
    position: "bottom-[8%] left-[12%]",
    duration: 20,
    delay: 4,
    translateX: [0, 35, -45, 25, 0],
    translateY: [0, -25, 40, -30, 0],
    scale: [1, 1.04, 0.95, 1.02, 1],
    rotate: [-15, -5, -25, -12, -15],
    borderRadius: "58% 42% 52% 48% / 45% 55% 40% 60%",
  },
  {
    id: 4,
    color: "#A8C5A3", // Light sage
    size: "w-[550px] h-[400px]",
    position: "bottom-[3%] right-[8%]",
    duration: 25,
    delay: 1.5,
    translateX: [0, -30, 40, -35, 0],
    translateY: [0, 45, -25, 35, 0],
    scale: [1, 0.94, 1.06, 0.97, 1],
    rotate: [25, 35, 15, 30, 25],
    borderRadius: "48% 52% 60% 40% / 38% 62% 35% 65%",
  },
  {
    id: 5,
    color: "#D0BCFF", // Lilac center
    size: "w-[320px] h-[380px]",
    position: "top-[35%] left-[30%]",
    duration: 16,
    delay: 3.5,
    translateX: [0, 25, -35, 20, 0],
    translateY: [0, -40, 20, -25, 0],
    scale: [1, 1.05, 0.96, 1.03, 1],
    rotate: [-8, 0, -16, -5, -8],
    borderRadius: "65% 35% 45% 55% / 50% 48% 52% 50%",
  },
  {
    id: 6,
    color: "#8A9A5B", // Sage accent
    size: "w-[440px] h-[500px]",
    position: "top-[18%] left-[45%]",
    duration: 22,
    delay: 5,
    translateX: [0, -50, 35, -25, 0],
    translateY: [0, 35, -30, 45, 0],
    scale: [1, 0.95, 1.04, 0.98, 1],
    rotate: [12, 22, 5, 18, 12],
    borderRadius: "52% 48% 55% 45% / 60% 38% 62% 40%",
  },
];

// Plant floating animation
const floatVariants = {
  animate: (custom: { duration: number; delay: number; y: number }) => ({
    y: [0, custom.y, 0],
    rotate: [0, custom.y > 0 ? 3 : -3, 0],
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      repeat: Infinity,
      ease: m3Emphasized,
    },
  }),
};

// Container stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      ease: m3Emphasized,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: m3Emphasized,
    },
  },
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ANIMATED ORGANIC BLOBS - Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {blobs.map((blob) => (
          <motion.div
            key={blob.id}
            className={`absolute ${blob.size} ${blob.position}`}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 0.22,
              x: blob.translateX,
              y: blob.translateY,
              scale: blob.scale,
              rotate: blob.rotate,
            }}
            transition={{
              opacity: { duration: 2.5, delay: blob.delay * 0.25, ease: m3Emphasized },
              x: { duration: blob.duration, delay: blob.delay, repeat: Infinity, ease: m3Emphasized },
              y: { duration: blob.duration * 1.15, delay: blob.delay, repeat: Infinity, ease: m3Emphasized },
              scale: { duration: blob.duration * 0.85, delay: blob.delay, repeat: Infinity, ease: m3Emphasized },
              rotate: { duration: blob.duration * 1.25, delay: blob.delay, repeat: Infinity, ease: m3Emphasized },
            }}
            style={{
              background: blob.color,
              filter: "blur(90px)",
              borderRadius: blob.borderRadius,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* PLANT DECORATIONS - Mid Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Top left - hanging vine */}
        <motion.img
          src={plantVine}
          alt=""
          className="absolute -top-4 left-0 w-36 md:w-52 opacity-75"
          style={{ 
            transformOrigin: "top center",
            filter: "drop-shadow(0 0 30px rgba(138, 154, 91, 0.25))" 
          }}
          variants={floatVariants}
          animate="animate"
          custom={{ duration: 8, delay: 0, y: -10 }}
        />

        {/* Top right - leaves */}
        <motion.img
          src={plantLeaves}
          alt=""
          className="absolute -top-2 right-4 md:right-12 w-32 md:w-44 opacity-70 scale-x-[-1]"
          style={{ 
            transformOrigin: "top right",
            filter: "drop-shadow(0 0 25px rgba(208, 188, 255, 0.2))" 
          }}
          variants={floatVariants}
          animate="animate"
          custom={{ duration: 9, delay: 1.5, y: -12 }}
        />

        {/* Left side - tall snake plant */}
        <motion.img
          src={snakePlant}
          alt=""
          className="absolute bottom-0 left-4 md:left-16 w-48 md:w-72 opacity-85"
          style={{ filter: "drop-shadow(0 0 40px rgba(138, 154, 91, 0.3))" }}
          variants={floatVariants}
          animate="animate"
          custom={{ duration: 10, delay: 0.5, y: -18 }}
        />

        {/* Bottom center-left - angular */}
        <motion.img
          src={plantAngular}
          alt=""
          className="absolute bottom-0 left-1/4 w-40 md:w-56 opacity-65"
          style={{ filter: "drop-shadow(0 0 30px rgba(168, 197, 163, 0.25))" }}
          variants={floatVariants}
          animate="animate"
          custom={{ duration: 7, delay: 2, y: -10 }}
        />

        {/* Right side - plant cluster */}
        <motion.img
          src={plantLeaves}
          alt=""
          className="absolute bottom-0 right-4 md:right-12 w-44 md:w-64 opacity-80"
          style={{ filter: "drop-shadow(0 0 35px rgba(138, 154, 91, 0.25))" }}
          variants={floatVariants}
          animate="animate"
          custom={{ duration: 11, delay: 3, y: -15 }}
        />

        {/* Far right - accent vine */}
        <motion.img
          src={plantVine}
          alt=""
          className="absolute bottom-8 right-1/4 w-24 md:w-32 opacity-55 rotate-180"
          style={{ filter: "drop-shadow(0 0 20px rgba(208, 188, 255, 0.2))" }}
          variants={floatVariants}
          animate="animate"
          custom={{ duration: 6, delay: 4, y: -8 }}
        />
      </div>

      {/* CENTRAL HERO CONTENT - Top Layer */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-30 text-center px-4 max-w-xl mx-auto"
      >
        {/* Glassmorphism Card */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1E1E1E]/88 backdrop-blur-2xl border border-[#49454F]/50 p-8 md:p-10 rounded-[32px]"
          style={{
            boxShadow: "0 30px 90px -25px rgba(0, 0, 0, 0.65), 0 0 70px -20px rgba(138, 154, 91, 0.12)"
          }}
        >
          {/* Unicorn Logo */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="text-5xl">🦄</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-extrabold text-[#E3E3E3] mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
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
          >
            A simple space to nurture your thoughts and organize your world. Sign in to continue growing.
          </motion.p>

          {/* Buttons - Variable Shapes */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Primary - Pill */}
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center bg-[#8A9A5B] text-[#121212] font-bold px-10 py-3.5 rounded-full transition-all duration-300 hover:bg-[#9AB065] hover:scale-105 hover:shadow-lg hover:shadow-[#8A9A5B]/25 text-sm md:text-base"
            >
              Sign In
            </Link>

            {/* Secondary - Squircle */}
            <Link
              to="#"
              className="inline-flex items-center justify-center border-2 border-[#49454F] text-[#E3E3E3] font-semibold px-10 py-3.5 rounded-[16px] transition-all duration-300 hover:border-[#8A9A5B] hover:text-white hover:scale-105 text-sm md:text-base"
            >
              Register
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Sparkle accents */}
      <motion.div
        animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.35, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: m3Emphasized }}
        className="absolute bottom-6 right-6 text-[#E3E3E3]/45 text-xl pointer-events-none z-20"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ opacity: [0.15, 0.7, 0.15], scale: [0.85, 1.15, 0.85] }}
        transition={{ duration: 4.5, delay: 2, repeat: Infinity, ease: m3Emphasized }}
        className="absolute top-1/4 right-1/3 text-[#D0BCFF]/25 text-sm pointer-events-none z-20"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ opacity: [0.2, 0.65, 0.2], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 3.8, delay: 1, repeat: Infinity, ease: m3Emphasized }}
        className="absolute bottom-1/3 left-1/5 text-[#8A9A5B]/30 text-xs pointer-events-none z-20"
      >
        ✦
      </motion.div>
    </div>
  );
};

export default Landing;
