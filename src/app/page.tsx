import TerminalHero from "@/components/TerminalHero";
import NetworkBackground from "@/components/NetworkBackground";
import BentoDashboard from "@/components/BentoDashboard";
import ProjectVault from "@/components/ProjectVault";
import { Shield, Mail, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <NetworkBackground />

      {/* Hero Section */}
      <TerminalHero />

      {/* Dashboard Section */}
      <BentoDashboard />

      {/* Projects Section */}
      <ProjectVault />

      {/* About / "Dossier" Teaser */}
      <section className="py-24 px-6 relative z-10 max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-2xl border border-cyber/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 border-l border-b border-cyber/10 text-[9px] font-mono opacity-50">
            NODE_7.2 / DOSSIER_ACCESS
          </div>

          <h2 className="text-4xl font-bold mb-6">OPERATIVE <span className="text-matrix">SIMON WOOD</span></h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Specialist in Security Operations and Tactical Intelligence Gathering. Currently expanding the digital perimeter through rigorous lab experimentation and vulnerability research.
          </p>

          <div className="flex justify-center gap-6">
            <a href="mailto:simonwood@hotmail.co.uk" className="p-3 rounded-full bg-white/5 border border-white/10 text-cyber hover:bg-cyber hover:text-background transition-all">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/Mousewarriors/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-cyber hover:bg-cyber hover:text-background transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/simon-wood-276a15100/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-cyber hover:bg-cyber hover:text-background transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 relative z-10 text-center border-t border-white/5 italic font-mono text-xs text-gray-600">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Shield className="w-4 h-4 text-matrix opacity-30" />
          <span>ENCRYPTED_CONNECTION_SECURE</span>
        </div>
        &copy; 2026 DIGITAL_OPERATIONS_CENTER. ALL_RIGHTS_RESERVED.
      </footer>

      {/* Decorative sidebars */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8 opacity-20 hover:opacity-100 transition-opacity hidden xl:flex">
        <div className="h-24 w-[1px] bg-gradient-to-t from-cyber to-transparent" />
        <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.5em] font-mono text-cyber">OPERATIONS_LOG</span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-cyber to-transparent" />
      </div>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8 opacity-20 hover:opacity-100 transition-opacity hidden xl:flex">
        <div className="h-24 w-[1px] bg-gradient-to-t from-matrix to-transparent" />
        <span className="[writing-mode:vertical-lr] text-[10px] tracking-[0.5em] font-mono text-matrix">SOC_ACTIVE</span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-matrix to-transparent" />
      </div>
    </main>
  );
}
