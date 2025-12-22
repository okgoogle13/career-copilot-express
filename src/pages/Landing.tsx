import { Link } from "react-router-dom";
import { FileText, ClipboardList, FileCheck, BarChart3, ArrowRight, Book } from "lucide-react";
import snakePlant from "@/assets/snakeplant.png";
import plantBanner from "@/assets/plantbanner-footer.png";
const toolkitCards = [{
  icon: ClipboardList,
  title: "Selection Criteria",
  description: "Drafting STAR responses for Government roles."
}, {
  icon: FileText,
  title: "Resume Tailoring",
  description: "Automating the tedious process of customizing your resume to suit a specific position description."
}, {
  icon: FileCheck,
  title: "Cover Letter Generation",
  description: "Automate the painful task of drafting authentic, tailored cover letters for a particular job application."
}, {
  icon: BarChart3,
  title: "ATS Analysis",
  description: "Mirrors features and functionality for Jobscan — see how well your resume matches a job opportunity."
}];
const Landing = () => {
  return <div className="relative min-h-screen bg-[#121212] overflow-hidden">
      {/* CSS Noise Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
      opacity: 0.04,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
    }} />

      {/* Main Content */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20">
          {/* Snake Plant - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-[300px] md:w-[400px] lg:w-[500px] pointer-events-none">
            <div className="w-full h-full" style={{
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in'
          }}>
              <img src={snakePlant} alt="" className="w-full h-auto object-contain opacity-60" />
            </div>
          </div>

          {/* Hero Content - "The Leaf" Shape */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-[#1E1E1E] border border-[#49454F] p-8 md:p-12 lg:p-16 rounded-tl-3xl rounded-tr-[4rem] rounded-br-3xl rounded-bl-lg">
              {/* Tagline */}
              <span className="inline-block font-mono text-xs tracking-widest uppercase text-[#D0BCFF] mb-6">BETA V1</span>

              {/* Headline */}
              <h1 className="font-extrabold text-white leading-tight mb-6" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)'
            }}>Career Copilot (FML)<br />
                Not the Paperwork.
              </h1>

              {/* Subhead */}
              

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* Primary - Sage Green Pill */}
                <Link to="/" className="inline-flex items-center gap-2 bg-[#8A9A5B] text-[#121212] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#9AB065] hover:scale-105">Enter<ArrowRight className="w-5 h-5" />
                </Link>

                {/* Secondary - Outline Pill */}
                
              </div>
            </div>
          </div>
        </section>

        {/* TOOLKIT GRID SECTION */}
        <section className="relative px-6 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <span className="inline-block font-mono text-xs tracking-widest uppercase text-[#D0BCFF] mb-4">(YOU'RE A) TOOL</span>
              <h2 className="font-extrabold text-white" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'
            }}>Stop procrastinating and get a job ya knob</h2>
            </div>

            {/* Grid - "The Tech" Shape (16px radius) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolkitCards.map((card, index) => <div key={index} className="group bg-[#2C2C2C] border border-[#49454F] rounded-[16px] p-6 transition-all duration-300 hover:border-[#8A9A5B] hover:bg-[#2C2C2C]/80">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#8A9A5B]/30">
                    <card.icon className="w-6 h-6 text-[#8A9A5B]" />
                  </div>

                  {/* Title */}
                  

                  {/* Description */}
                  <p className="font-plain text-[#938F99] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        {/* FOOTER with Plant Banner */}
        <footer className="relative mt-20">
          {/* Gradient Mask Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10" style={{
          background: 'linear-gradient(to bottom, #121212 0%, transparent 30%)'
        }} />
          
          {/* Plant Banner Image */}
          <div className="relative">
            <img src={plantBanner} alt="" className="w-full h-auto object-cover" />
            
            {/* Footer Content Overlay */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 z-20">
              <div className="text-center">
                <p className="font-mono text-xs tracking-widest uppercase text-[#938F99] mb-2">
                  CAREER COPILOT
                </p>
                <p className="font-plain text-[#49454F] text-sm">
                  Built for Australian Social Workers
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>;
};
export default Landing;