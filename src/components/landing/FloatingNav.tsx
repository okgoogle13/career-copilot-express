import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import unicornLogo from "@/assets/unicorn-logo.png";
const navLinks = [{
  label: "Selection Criteria",
  href: "#toolkit"
}, {
  label: "Toolkit",
  href: "#toolkit"
}, {
  label: "Docs",
  href: "#"
}];
const m3Emphasized = [0.2, 0.0, 0, 1.0] as const;
const FloatingNav = () => {
  const {
    scrollY
  } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.4]);
  return <motion.nav initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4,
    ease: m3Emphasized
  }} style={{
    scale
  }} className="fixed top-3 left-1/2 -translate-x-1/2 z-50">
      <motion.div style={{
      boxShadow: useTransform(shadowOpacity, v => `0 4px 24px rgba(138, 154, 91, ${v})`)
    }} className="flex items-center gap-1 px-2 py-1.5 bg-[#2C2C2C]/70 backdrop-blur-md border border-[#49454F] rounded-full">
        {/* Logo */}
        <div className="flex items-center px-2">
          <img src={unicornLogo} alt="Career Copilot" className="w-6 h-6" />
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-[#49454F]" />

        {/* Nav Links */}
        

        {/* Divider */}
        <div className="hidden md:block w-px h-4 bg-[#49454F]" />

        {/* CTA Button */}
        <Link to="/dashboard" className="px-4 py-1.5 bg-[#8A9A5B] text-[#121212] text-xs font-bold rounded-full hover:bg-[#9AB065] transition-colors duration-200">Sign In</Link>
      </motion.div>
    </motion.nav>;
};
export default FloatingNav;