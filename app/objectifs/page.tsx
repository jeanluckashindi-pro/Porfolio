import Header from "../components/Header";
import { Target, TrendingUp, Rocket, Globe, Users, Code, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ObjectifsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,180,248,0.1),transparent_50%)]"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-primary/40 rounded-[5px] mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Vision & Ambitions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Mes Objectifs</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                Une vision claire pour l'avenir et des objectifs concrets pour continuer à grandir et à avoir un impact
              </p>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ma Vision</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                Devenir un <span className="text-primary font-semibold">architecte logiciel reconnu</span> en Afrique, 
                contribuant activement à la <span className="text-secondary font-semibold">transformation numérique</span> du continent 
                en développant des solutions innovantes qui ont un <span className="text-tertiary font-semibold">impact réel</span> sur 
                la vie des gens.
              </p>
            </div>
          </div>
        </section>

        {/* Short-term Goals */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Objectifs Court Terme (2026)</h2>
              <p className="text-white/60">Ce que je veux accomplir dans les 12 prochains mois</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Maîtriser de Nouvelles Technologies</h3>
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-card-2 border border-primary/40 rounded-[5px] mb-3">
                      <span className="text-xs text-primary font-semibold">Technique</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Approfondir Kubernetes et orchestration de conteneurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Explorer l'IA et le Machine Learning avec Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Obtenir une certification AWS Solutions Architect</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Lancer Ufaranga en Production</h3>
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-card-2 border border-secondary/40 rounded-[5px] mb-3">
                      <span className="text-xs text-secondary font-semibold">Projet</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Finaliser le MVP et tester avec utilisateurs pilotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Sécuriser un partenariat avec une compagnie de transport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Déployer la solution dans 2 lignes de transport urbain</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-tertiary/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-tertiary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Partager mes Connaissances</h3>
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-card-2 border border-tertiary/40 rounded-[5px] mb-3">
                      <span className="text-xs text-tertiary font-semibold">Communauté</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Publier 12 articles techniques sur mon blog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Mentorer 3 développeurs juniors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Participer à 2 conférences tech locales</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Évoluer Professionnellement</h3>
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-card-2 border border-primary/40 rounded-[5px] mb-3">
                      <span className="text-xs text-primary font-semibold">Carrière</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Prendre plus de responsabilités en architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Diriger un projet de bout en bout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">Développer mes compétences en leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Goals */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Objectifs Long Terme (2027-2030)</h2>
              <p className="text-white/60">Ma vision pour les 5 prochaines années</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-8 text-center hover:border-primary/30 transition-all">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Impact Régional</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Développer des solutions utilisées dans plusieurs pays d'Afrique de l'Est et contribuer 
                  activement à la transformation numérique de la région.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                  <span className="text-xs text-primary font-semibold">Expansion</span>
                </div>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-8 text-center hover:border-secondary/30 transition-all">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Entrepreneuriat Tech</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Créer ma propre startup tech pour développer des solutions innovantes qui résolvent 
                  des problèmes réels en Afrique.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                  <span className="text-xs text-secondary font-semibold">Innovation</span>
                </div>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-8 text-center hover:border-tertiary/30 transition-all">
                <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-tertiary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Formation & Mentorat</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Former la prochaine génération de développeurs africains et créer une communauté 
                  tech forte au Burundi.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-tertiary/40 rounded-[5px]">
                  <span className="text-xs text-tertiary font-semibold">Éducation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Mes Valeurs</h2>
              <p className="text-white/60">Les principes qui guident mes décisions et mes actions</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Excellence Technique
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Toujours viser la qualité et l'excellence dans chaque ligne de code, chaque architecture, chaque solution.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Impact Social
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Développer des solutions qui ont un impact positif réel sur la vie des gens et la société.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                  Apprentissage Continu
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Rester curieux, apprendre constamment et s'adapter aux nouvelles technologies et méthodologies.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Collaboration
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Travailler en équipe, partager les connaissances et contribuer à la croissance collective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Construisons l'Avenir Ensemble</h3>
              <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                Si mes objectifs résonnent avec votre vision, collaborons pour créer des solutions 
                qui font la différence.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
              >
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
