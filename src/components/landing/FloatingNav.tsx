import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import unicornLogo from "@/assets/unicorn-logo.png";

const navLinks = [
  { label: "Selection Criteria", href: "#toolkit" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Documentation", href: "#" },
];

const m3Emphasized = [0.2, 0.0, 0, 1.0] as const;

const FloatingNav = () => {
  const { scrollY } = useScroll();
  
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0.3, 0.6]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.4]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: m3Emphasized }}
      style={{ scale }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        style={{
          boxShadow: useTransform(
            shadowOpacity,
            (v) => `0 8px 32px rgba(138, 154, 91, ${v})`
          ),
        }}
        className="flex items-center gap-2 px-3 py-2 bg-[#2C2C2C]/70 backdrop-blur-md border border-[#49454F] rounded-full"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-3">
          <img src={unicornLogo} alt="Career Copilot" className="w-8 h-8" />
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-[#49454F]" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#C4C7C5] hover:text-white transition-colors duration-200 rounded-full hover:bg-[#49454F]/30"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-[#49454F]" />

        {/* CTA Button */}
        <Link
          to="/dashboard"
          className="px-5 py-2 bg-[#8A9A5B] text-[#121212] text-sm font-bold rounded-full hover:bg-[#9AB065] transition-colors duration-200"
        >
          Enter Workspace
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default FloatingNav;
