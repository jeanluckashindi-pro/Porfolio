import Header from "../components/Header";
import { Globe, Github, Linkedin, Twitter, Mail, MessageCircle, Youtube, Instagram } from "lucide-react";

export default function ReseauxPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(129,201,149,0.1),transparent_50%)]"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-secondary/40 rounded-[5px] mb-6">
                <Globe className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-semibold">Présence en Ligne</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Réseaux Sociaux</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Connectons-nous sur vos plateformes préférées pour échanger et collaborer
              </p>
            </div>
          </div>
        </section>

        {/* Main Social Networks */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Réseaux Principaux</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/jeanluc-kashindi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">LinkedIn</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      Réseau professionnel principal. Partagez votre parcours, connectez avec des professionnels 
                      et suivez mes actualités professionnelles.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Networking</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Carrière</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Projets</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span>500+ Connexions</span>
                      <span>•</span>
                      <span>Actif quotidiennement</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/jeanluc-kashindi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-secondary/10 to-card-2 border border-secondary/30 rounded-xl p-8 hover:border-secondary/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Github className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">GitHub</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      Mes projets open source, contributions et code. Explorez mes repositories, 
                      collaborez et contribuez aux projets.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Open Source</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Code</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Collaboration</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span>50+ Repositories</span>
                      <span>•</span>
                      <span>200+ Contributions</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Twitter/X */}
              <a 
                href="https://twitter.com/jeanluc_dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-tertiary/10 to-card-2 border border-tertiary/30 rounded-xl p-8 hover:border-tertiary/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-tertiary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Twitter className="w-8 h-8 text-tertiary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Twitter / X</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      Actualités tech, réflexions sur le développement et partage de connaissances. 
                      Discussions sur les tendances technologiques.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Tech News</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Discussions</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Veille</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span>1K+ Followers</span>
                      <span>•</span>
                      <span>Tweets quotidiens</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:contact@jeanluc-kashindi.dev" 
                className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      Pour les demandes professionnelles, collaborations ou questions techniques. 
                      Réponse sous 24-48h.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Professionnel</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Collaboration</div>
                      <div className="px-3 py-1 bg-card-2 text-white/70 text-xs rounded-[5px]">Support</div>
                    </div>
                    <div className="text-sm text-primary font-mono">
                      contact@jeanluc-kashindi.dev
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Secondary Networks */}
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Autres Plateformes</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* YouTube */}
              <a 
                href="https://youtube.com/@jeanluc-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group text-center"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Youtube className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">YouTube</h3>
                <p className="text-sm text-white/70 mb-3">
                  Tutoriels vidéo et démonstrations de projets
                </p>
                <div className="text-xs text-white/60">50+ Vidéos</div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/jeanluc.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all group text-center"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Instagram</h3>
                <p className="text-sm text-white/70 mb-3">
                  Coulisses des projets et vie de développeur
                </p>
                <div className="text-xs text-white/60">500+ Followers</div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/25762149200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-tertiary/30 transition-all group text-center"
              >
                <div className="w-14 h-14 bg-tertiary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-sm text-white/70 mb-3">
                  Contact direct pour échanges rapides
                </p>
                <div className="text-xs text-white/60">+257 62 14 92 00</div>
              </a>

              {/* Website */}
              <a 
                href="https://jeanluc-kashindi.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all group text-center"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Site Web</h3>
                <p className="text-sm text-white/70 mb-3">
                  Portfolio complet et blog technique
                </p>
                <div className="text-xs text-white/60">jeanluc-kashindi.dev</div>
              </a>
            </div>
          </div>
        </section>

        {/* Community Engagement */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Engagement Communautaire</h2>
            
            <div className="bg-card-2 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1K+</div>
                  <div className="text-sm text-white/60">Followers totaux</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-sm text-white/60">Connexions pro</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-tertiary mb-2">200+</div>
                  <div className="text-sm text-white/60">Contributions</div>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/70 text-center leading-relaxed">
                  Actif sur toutes les plateformes, je partage régulièrement du contenu technique, 
                  participe aux discussions et contribue à la communauté tech africaine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Restons Connectés</h3>
              <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                Choisissez votre plateforme préférée et suivez-moi pour ne rien manquer de mes 
                actualités, projets et partages de connaissances.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://linkedin.com/in/jeanluc-kashindi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/jeanluc-kashindi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-card-2 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/5 transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
