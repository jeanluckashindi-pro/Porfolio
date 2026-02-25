import Header from "../components/Header";
import { Link2, ExternalLink, Github, Linkedin, Twitter, Globe, BookOpen, Code, FileText } from "lucide-react";
import Link from "next/link";

export default function LiensPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,180,248,0.1),transparent_50%)]"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-primary/40 rounded-[5px] mb-6">
                <Link2 className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Ressources Externes</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Liens Utiles</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Ressources, profils professionnels et liens vers mes projets et contributions
              </p>
            </div>
          </div>
        </section>

        {/* Professional Profiles */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Profils Professionnels</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* GitHub */}
              <a 
                href="https://github.com/jeanluc-kashindi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Github className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">GitHub</h3>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-white/70 text-sm mb-3">
                      Mes projets open source, contributions et repositories publics
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span>50+ Repositories</span>
                      <span>•</span>
                      <span>200+ Contributions</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/jeanluc-kashindi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-secondary transition-colors" />
                    </div>
                    <p className="text-white/70 text-sm mb-3">
                      Parcours professionnel, recommandations et réseau
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span>500+ Connexions</span>
                      <span>•</span>
                      <span>Actif</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Twitter/X */}
              <a 
                href="https://twitter.com/jeanluc_dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-tertiary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-tertiary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Twitter className="w-7 h-7 text-tertiary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Twitter / X</h3>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-tertiary transition-colors" />
                    </div>
                    <p className="text-white/70 text-sm mb-3">
                      Actualités tech, réflexions et partages de connaissances
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span>1K+ Followers</span>
                      <span>•</span>
                      <span>Tech & Dev</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Portfolio Website */}
              <a 
                href="https://jeanluc-kashindi.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Site Personnel</h3>
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-white/70 text-sm mb-3">
                      Portfolio complet, blog technique et projets détaillés
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <span>Blog</span>
                      <span>•</span>
                      <span>Projets</span>
                      <span>•</span>
                      <span>Contact</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Project Links */}
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets en Ligne</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <a 
                href="https://odeca.gov.bi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">ODECA Platform</h3>
                <p className="text-sm text-white/70 mb-3 leading-relaxed">
                  Plateforme nationale de cartographie de la filière café
                </p>
                <div className="flex items-center gap-2 text-xs text-primary">
                  <span>Visiter le site</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>

              <a 
                href="https://github.com/jeanluc-kashindi/ufaranga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Ufaranga</h3>
                <p className="text-sm text-white/70 mb-3 leading-relaxed">
                  Solution de paiement NFC pour transports urbains
                </p>
                <div className="flex items-center gap-2 text-xs text-secondary">
                  <span>Voir sur GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>

              <a 
                href="https://mediabox.bi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-tertiary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mediabox</h3>
                <p className="text-sm text-white/70 mb-3 leading-relaxed">
                  Entreprise leader en solutions numériques au Burundi
                </p>
                <div className="flex items-center gap-2 text-xs text-tertiary">
                  <span>Visiter le site</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            </div>

            {/* Resources */}
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Ressources & Documentation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://docs.jeanluc-kashindi.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">Documentation Technique</h3>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Guides, tutoriels et documentation de mes projets open source
                    </p>
                  </div>
                </div>
              </a>

              <a 
                href="https://blog.jeanluc-kashindi.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">Blog Technique</h3>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-secondary transition-colors" />
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Articles techniques, retours d'expérience et bonnes pratiques
                    </p>
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/jeanluc-kashindi/awesome-burundi-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-tertiary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-tertiary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">Awesome Burundi Tech</h3>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-tertiary transition-colors" />
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Liste curatée de ressources tech pour développeurs burundais
                    </p>
                  </div>
                </div>
              </a>

              <Link 
                href="/cv"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">CV en Ligne</h3>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Curriculum vitae complet avec possibilité de téléchargement PDF
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
