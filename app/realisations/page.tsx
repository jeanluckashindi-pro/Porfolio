import Header from "../components/Header";
import { Award, TrendingUp, Users, Code, Globe, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function RealisationsPage() {
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
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Accomplissements</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Mes Réalisations</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Un aperçu des projets livrés, des impacts mesurables et des compétences développées
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-primary/20 to-card-2 border border-primary/30 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-white/70">Ans d'expérience</div>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-card-2 border border-secondary/30 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-white/70">Projets livrés</div>
              </div>

              <div className="bg-gradient-to-br from-tertiary/20 to-card-2 border border-tertiary/30 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-tertiary" />
                </div>
                <div className="text-4xl font-bold text-tertiary mb-2">5+</div>
                <div className="text-sm text-white/70">Clients satisfaits</div>
              </div>

              <div className="bg-gradient-to-br from-white/15 to-card-2 border border-white/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white/80" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-sm text-white/70">Pays (BI, RDC)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Achievements */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Réalisations Majeures</h2>
            
            <div className="space-y-8">
              {/* ODECA Achievement */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Digitalisation de la Filière Café Nationale</h3>
                    <p className="text-primary font-medium mb-4">Projet ODECA - Impact Gouvernemental</p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Contribution majeure au développement d'une plateforme nationale de gestion de la filière café, 
                      utilisée par l'État burundais pour superviser l'ensemble de la production caféière du pays.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                        <div className="text-xs text-white/60">Producteurs enregistrés</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary mb-1">100%</div>
                        <div className="text-xs text-white/60">Couverture nationale</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                        <div className="text-xs text-white/60">Disponibilité système</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Architecture microservices scalable déployée en production</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Système de cartographie géospatiale intégré</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Formation des équipes gouvernementales à l'utilisation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Starlink Achievement */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Système ISP Starlink</h3>
                    <p className="text-secondary font-medium mb-4">Solution Commerciale Stratégique</p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Développement complet du système de gestion et revente des kits Starlink pour Mediabox Burundi, 
                      revendeur officiel au Burundi.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary mb-1">100+</div>
                        <div className="text-xs text-white/60">Kits gérés</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary mb-1">Real-time</div>
                        <div className="text-xs text-white/60">Monitoring</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary mb-1">API</div>
                        <div className="text-xs text-white/60">Intégration complète</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Intégration API Starlink officielle</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Dashboard de monitoring en temps réel</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Système de facturation automatisé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* UNICEF Achievement */}
              <div className="bg-card-2 border border-white/10 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-tertiary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-tertiary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Collaboration Internationale</h3>
                    <p className="text-tertiary font-medium mb-4">UNICEF Burundi</p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Contribution au développement de solutions numériques pour l'une des plus grandes organisations 
                      humanitaires internationales, en respectant les standards rigoureux des Nations Unies.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Respect des standards internationaux ONU</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Collaboration avec équipes multiculturelles</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Solutions à impact humanitaire direct</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Developed */}
        <section className="py-16 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Compétences Développées</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Architecture Microservices</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Conception et déploiement de systèmes distribués scalables pour des projets à grande échelle.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Intégration API</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Expertise dans l'intégration d'APIs tierces complexes et la création d'APIs RESTful robustes.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Leadership Technique</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Mentorat d'équipes, revue de code et établissement de standards de développement.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Performance & Scalabilité</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Optimisation de systèmes pour gérer des charges importantes et garantir la haute disponibilité.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Gestion de Projet</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Coordination de projets complexes avec respect des délais et des exigences clients.
                </p>
              </div>

              <div className="bg-card-2 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Innovation Continue</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Veille technologique active et adoption de nouvelles technologies pour améliorer les solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Prêt à collaborer ?</h3>
              <p className="text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                Ces réalisations démontrent ma capacité à livrer des solutions de qualité. 
                Discutons de la façon dont je peux contribuer à votre prochain projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
                >
                  Me contacter
                </Link>
                <Link 
                  href="/projets/professionnels" 
                  className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/5 transition-all"
                >
                  Voir tous les projets
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
