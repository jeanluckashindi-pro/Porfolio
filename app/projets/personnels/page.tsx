import Header from "../../components/Header";
import { Zap, Code, Smartphone, CheckCircle, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjetsPersonnelsPage() {
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
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Innovation personnelle</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Projets Personnels</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Projets développés en dehors des heures de travail pour explorer de nouvelles technologies et résoudre des problèmes réels
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Ufaranga - Featured Project */}
              <div className="bg-gradient-to-br from-primary/10 via-card-2 to-card-2 border border-primary/30 rounded-xl overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Smartphone className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Ufaranga</h2>
                        <p className="text-primary font-medium">Système de Paiement Sans Contact pour Transport Urbain</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs text-primary font-semibold">En développement</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <p className="text-sm text-white/70 leading-relaxed">
                      <span className="font-semibold text-white">Vision du projet :</span> Moderniser les transactions dans les transports en commun 
                      en Afrique en proposant une solution de paiement sans contact simple, rapide et sécurisée.
                    </p>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6">
                    Ufaranga est un projet fintech innovant que je développe en dehors de mes heures de travail. 
                    L'objectif est de créer un système de paiement NFC pour faciliter les transactions dans les transports urbains, 
                    réduire l'utilisation d'argent liquide et améliorer l'expérience des usagers.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Architecture & Fonctionnalités</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Architecture microservices complète multi-langages</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Paiement NFC sans contact</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Système d'authentification sécurisé (JWT/OAuth)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Gestion des transactions en temps réel</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Système de notifications push</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">API Gateway pour orchestration des services</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Dashboard administrateur</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Application mobile (iOS & Android)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Stack Technique</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-white mb-3">Backend Services</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-xs text-white/70">Spring Boot (Java)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-xs text-white/70">Node.js / Express</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-xs text-white/70">Django REST (Python)</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-white mb-3">Frontend & Mobile</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <span className="text-xs text-white/70">React / Next.js</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <span className="text-xs text-white/70">React Native</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                            <span className="text-xs text-white/70">TypeScript</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-white mb-3">Infrastructure</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                            <span className="text-xs text-white/70">Docker / Kubernetes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                            <span className="text-xs text-white/70">PostgreSQL / Redis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-tertiary rounded-full"></div>
                            <span className="text-xs text-white/70">CI/CD Pipeline</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-lg p-4 mb-6">
                    <p className="text-sm text-white/70">
                      <span className="font-semibold text-white">💡 Objectif :</span> Ce projet me permet d'expérimenter avec des architectures 
                      complexes et de démontrer ma capacité à concevoir des systèmes complets de A à Z. Il est disponible pour démonstration 
                      technique lors d'entretiens.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all">
                      <Github className="w-5 h-5" />
                      Voir le code (privé)
                    </button>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/5 transition-all"
                    >
                      Demander une démo
                    </Link>
                  </div>
                </div>
              </div>

              {/* Other Personal Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Portfolio Personnel</h3>
                      <p className="text-sm text-secondary">Site web professionnel</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    Ce site web que vous consultez actuellement. Développé avec Next.js, TypeScript et Tailwind CSS 
                    pour présenter mon parcours et mes compétences de manière professionnelle.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-[5px]">Next.js</span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-[5px]">TypeScript</span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-[5px]">Tailwind CSS</span>
                  </div>
                  <a href="https://github.com/jeanluckashindi-pro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm">
                    <Github className="w-4 h-4" />
                    Voir sur GitHub
                  </a>
                </div>

                <div className="bg-card-2 border border-white/10 rounded-xl p-6 hover:border-tertiary/30 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Projets Open Source</h3>
                      <p className="text-sm text-tertiary">Contributions communautaires</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    Contributions régulières à des projets open source et partage de solutions techniques 
                    sur GitHub pour aider la communauté des développeurs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-xs rounded-[5px]">Open Source</span>
                    <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-xs rounded-[5px]">Community</span>
                  </div>
                  <a href="https://github.com/jeanluckashindi-pro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-tertiary hover:text-tertiary/80 transition-colors text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Voir mes contributions
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-secondary/10 to-card-2 border border-secondary/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Vous avez un projet en tête ?</h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Ces projets personnels démontrent ma passion pour le développement et ma capacité à mener 
                  des projets de bout en bout. Parlons de votre idée !
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
                >
                  Discutons de votre projet
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
