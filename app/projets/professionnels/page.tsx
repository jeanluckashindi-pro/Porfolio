import Header from "../../components/Header";
import { Briefcase, Code, Globe, CheckCircle, ExternalLink, Calendar, Users } from "lucide-react";
import Link from "next/link";

export default function ProjetsProfessionnelsPage() {
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
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Portfolio professionnel</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Projets Professionnels</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Solutions développées pour des institutions gouvernementales et entreprises privées
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* ODECA Project */}
              <div className="bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Projet ODECA</h2>
                        <p className="text-primary font-medium">Système National de Gestion de la Filière Café</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px]">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs text-primary font-semibold">Gouvernemental</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-xs text-white/60">Période</span>
                      </div>
                      <p className="text-sm font-semibold text-white">2022 - 2024</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-white/60">Client</span>
                      </div>
                      <p className="text-sm font-semibold text-white">ODECA Burundi</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-4 h-4 text-tertiary" />
                        <span className="text-xs text-white/60">Rôle</span>
                      </div>
                      <p className="text-sm font-semibold text-white">Lead Developer</p>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6">
                    L'ODECA (Office de Développement du Café au Burundi) est l'organisme d'État burundais chargé de superviser 
                    l'ensemble de la production caféière nationale. Dans le cadre d'un projet de digitalisation confié à Mediabox 
                    par le gouvernement burundais, j'ai activement participé au développement d'une plateforme nationale de 
                    cartographie et de numérisation de toute la chaîne de valeur caféière.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Réalisations clés</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Cartographie géospatiale des producteurs sur le territoire national</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Création de profils individuels pour chaque caféiculteur</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Numérisation complète de la chaîne de valeur caféière</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Remontée de données en temps réel vers serveurs centraux</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white/60 mb-3">Technologies utilisées</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-[5px] border border-primary/30">Spring Boot</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-[5px] border border-primary/30">Angular</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-[5px] border border-primary/30">React</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">PostgreSQL</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">GIS</span>
                      <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-sm rounded-[5px] border border-tertiary/30">Microservices</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-white/60">
                      <span className="font-semibold text-white">Référence :</span> Martin, Team Leader — 
                      <a href="tel:+25762149200" className="text-primary hover:text-primary/80 transition-colors ml-1">+257 62 14 92 00</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* ISP Starlink Project */}
              <div className="bg-card-2 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-all">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-7 h-7 text-secondary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Projet ISP Starlink</h2>
                        <p className="text-secondary font-medium">Gestion et Revente des Kits Starlink</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-secondary/40 rounded-[5px]">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-xs text-secondary font-semibold">Commercial</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-white/60">Période</span>
                      </div>
                      <p className="text-sm font-semibold text-white">2023 - Présent</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-white/60">Client</span>
                      </div>
                      <p className="text-sm font-semibold text-white">Mediabox Burundi</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="w-4 h-4 text-tertiary" />
                        <span className="text-xs text-white/60">Rôle</span>
                      </div>
                      <p className="text-sm font-semibold text-white">Architecte & Developer</p>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6">
                    Dans le cadre du déploiement de la connectivité Starlink au Burundi, Mediabox m'a confié le développement 
                    du système ISP de gestion et de revente des équipements. Ce projet stratégique permet à Mediabox de gérer 
                    efficacement son statut de revendeur officiel Starlink au Burundi.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Réalisations clés</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Intégration complète des API officielles Starlink</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Dashboard temps réel pour métriques et performance réseau</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Système de facturation automatisé</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Architecture microservices scalable</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white/60 mb-3">Technologies utilisées</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">Spring Boot</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">React</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-[5px] border border-secondary/30">Node.js</span>
                      <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-sm rounded-[5px] border border-tertiary/30">API Integration</span>
                      <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-sm rounded-[5px] border border-tertiary/30">Real-time Dashboard</span>
                      <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-[5px] border border-white/20">Docker</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-white/60">
                      <span className="font-semibold text-white">Référence :</span> Martin, Team Leader — 
                      <a href="tel:+25762149200" className="text-secondary hover:text-secondary/80 transition-colors ml-1">+257 62 14 92 00</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Intéressé par mon travail ?</h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Ces projets démontrent ma capacité à livrer des solutions complexes à grande échelle. 
                  Discutons de votre prochain projet !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
                  >
                    Me contacter
                  </Link>
                  <Link 
                    href="/cv" 
                    className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/5 transition-all"
                  >
                    Voir mon CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
