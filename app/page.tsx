import Header from "./components/Header";
import { Briefcase, Code, FileText, Rocket, ExternalLink, ArrowRight, CheckCircle, Building, Award, BookOpen, Zap, Globe, TrendingUp, BarChart3, Target, Github, Calendar } from "lucide-react";
import Link from "next/link";
import { ExperienceChart, TechStackChart, SkillsDonutChart, ProjectsTimelineChart } from "./components/SkillsChart";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section - Redesigned */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 via-card-1 to-card-1">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,180,248,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(129,201,149,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(253,214,99,0.05),transparent_70%)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 relative">
            {/* Status Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary text-sm font-medium">Disponible pour de nouveaux projets</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Jean-Luc Kashindi Nestor
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                  Ingénieur Fullstack Senior
                </span>
              </p>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
                Architecte de solutions numériques à <span className="text-white font-semibold">fort impact</span>. 
                Spécialisé dans la conception et le déploiement de systèmes utilisés à l'échelle nationale 
                par des <span className="text-primary">institutions gouvernementales</span> et <span className="text-secondary">organisations internationales</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
              <div className="group bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 rounded-2xl p-6 hover:scale-105 transition-all hover:border-primary/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-white/70 font-medium">Ans d'expérience</div>
                  <div className="text-xs text-white/50 mt-1">Développement continu</div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent border border-secondary/30 rounded-2xl p-6 hover:scale-105 transition-all hover:border-secondary/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-white/70 font-medium">Projets livrés</div>
                  <div className="text-xs text-white/50 mt-1">Solutions déployées</div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-tertiary/20 via-tertiary/10 to-transparent border border-tertiary/30 rounded-2xl p-6 hover:scale-105 transition-all hover:border-tertiary/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-tertiary" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-tertiary mb-2">12+</div>
                  <div className="text-sm text-white/70 font-medium">Technologies</div>
                  <div className="text-xs text-white/50 mt-1">Stack moderne</div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white/15 via-white/5 to-transparent border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all hover:border-white/30">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-white/70 font-medium">Satisfaction</div>
                  <div className="text-xs text-white/50 mt-1">Clients satisfaits</div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-card-2/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-primary/30 transition-all hover:bg-card-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Mediabox Burundi</div>
                    <div className="text-xs text-primary">Poste actuel</div>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Leader dans le développement de solutions numériques et revendeur officiel Starlink au Burundi
                </p>
              </div>

              <div className="bg-card-2/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-secondary/30 transition-all hover:bg-card-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Projets Gouvernementaux</div>
                    <div className="text-xs text-secondary">Échelle nationale</div>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  ODECA (Café), ISP Starlink, solutions pour institutions publiques et organisations internationales
                </p>
              </div>

              <div className="bg-card-2/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-tertiary/30 transition-all hover:bg-card-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-tertiary/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-tertiary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Architecture Microservices</div>
                    <div className="text-xs text-tertiary">Expert technique</div>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Conception de systèmes distribués scalables avec Spring Boot, React, Node.js, Angular
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Démarrer un projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/projets/professionnels" 
                className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-10 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Voir mes réalisations
              </Link>
              <Link 
                href="/cv" 
                className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white px-6 py-4 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Télécharger CV
              </Link>
            </div>
          </div>
        </section>

        {/* Current Position - Redesigned */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-card-2/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-4">
                <Briefcase className="w-4 h-4" />
                Poste actuel
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Actuellement</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Mon rôle et mes responsabilités chez Mediabox Burundi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
              <div className="p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Left - Company Logo/Icon */}
                  <div className="w-full lg:w-auto">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-0">
                      <Building className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        Entreprise Leader
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full text-secondary text-xs font-medium">
                        <Zap className="w-3 h-3" />
                        Temps plein
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ingénieur Fullstack Senior</h3>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="text-xl font-semibold text-primary">Mediabox Burundi</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60">2022 - Présent</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60">3+ ans</span>
                    </div>

                    <p className="text-white/70 leading-relaxed mb-6 text-base sm:text-lg">
                      Mediabox Burundi est le <span className="text-white font-medium">revendeur légal officiel Starlink</span> au Burundi. 
                      En charge de la conception, du développement et du déploiement de solutions numériques stratégiques 
                      pour des clients publics et privés.
                    </p>

                    {/* Responsibilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Architecture de solutions complexes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Développement fullstack avancé</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Gestion de projets gouvernementaux</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">Intégration API Starlink</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="text-sm text-white/50 mb-3">Stack technique principal</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20">Spring Boot</span>
                        <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm rounded-lg border border-secondary/20">React</span>
                        <span className="px-4 py-2 bg-tertiary/10 text-tertiary text-sm rounded-lg border border-tertiary/20">Node.js</span>
                        <span className="px-4 py-2 bg-white/5 text-white/60 text-sm rounded-lg border border-white/10">Angular</span>
                        <span className="px-4 py-2 bg-white/5 text-white/60 text-sm rounded-lg border border-white/10">Microservices</span>
                      </div>
                    </div>

                    <a 
                      href="https://mediabox.bi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                    >
                      Visiter le site web
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey Section - NEW */}
        <section className="py-24 relative bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm mb-4">
                <Calendar className="w-4 h-4" />
                Mon parcours
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Parcours Professionnel</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Une progression continue dans le développement de solutions numériques innovantes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Timeline Column */}
              <div className="lg:col-span-2">
                <div className="bg-card-2 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Expériences Professionnelles
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Mediabox Burundi */}
                    <div className="relative pl-8 pb-6 border-l-2 border-white/20">
                      <div className="absolute left-0 top-0 w-4 h-4 bg-white rounded-full -translate-x-[9px] ring-4 ring-card-2"></div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-white">Mediabox Burundi</h4>
                            <p className="text-sm text-primary font-medium">Ingénieur Fullstack Senior</p>
                          </div>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Actuel</span>
                        </div>
                        <p className="text-xs text-white/50 mb-4">2022 - Présent • 3+ ans</p>
                        <p className="text-sm text-white/70 leading-relaxed mb-4">
                          Entreprise privée burundaise, leader dans le développement de solutions numériques, impliquée dans des projets stratégiques gouvernementaux et privés à l'échelle nationale, et revendeur officiel des kits Starlink au Burundi.
                        </p>

                        {/* ODECA Project */}
                        <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/5">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <h5 className="text-sm font-semibold text-white">Projet ODECA — Système National Café</h5>
                          </div>
                          <p className="text-xs text-white/60 mb-3">Projet gouvernemental de digitalisation de la filière caféière</p>
                          <ul className="space-y-2 mb-3">
                            <li className="flex items-start gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                              <span>Cartographie géospatiale des producteurs sur le territoire national</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                              <span>Création de profils individuels pour chaque caféiculteur</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                              <span>Numérisation complète de la chaîne de valeur caféière</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                              <span>Remontée de données en temps réel vers serveurs centraux</span>
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Spring Boot</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Angular</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                          </div>
                        </div>

                        {/* ISP Starlink Project */}
                        <div className="mt-3 p-4 bg-white/5 rounded-lg border border-white/5">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <h5 className="text-sm font-semibold text-white">Projet ISP — Gestion Kits Starlink</h5>
                          </div>
                          <p className="text-xs text-white/60 mb-3">Système de gestion et revente des équipements Starlink</p>
                          <ul className="space-y-2 mb-3">
                            <li className="flex items-start gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                              <span>Intégration complète des API officielles Starlink</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                              <span>Dashboard temps réel : métriques, performance réseau, facturation</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                              <span>Architecture microservices scalable et haute disponibilité</span>
                            </li>
                          </ul>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">Spring Boot</span>
                            <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">React</span>
                            <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">Node.js</span>
                          </div>
                        </div>

                        {/* Reference */}
                        <div className="mt-4 p-3 bg-tertiary/5 border border-tertiary/20 rounded-lg">
                          <p className="text-xs text-white/60">
                            <span className="text-tertiary font-medium">Référence :</span> Martin, Team Leader chez MediaBox — 
                            <a href="tel:+25762149200" className="text-white hover:text-tertiary transition-colors ml-1">+257 62 14 92 00</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* UNICEF Burundi */}
                    <div className="relative pl-8 pb-6 border-l-2 border-white/20">
                      <div className="absolute left-0 top-0 w-4 h-4 bg-white/70 rounded-full -translate-x-[9px] ring-4 ring-card-2"></div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-white">UNICEF Burundi</h4>
                            <p className="text-sm text-secondary font-medium">Ingénieur IT</p>
                          </div>
                          <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">CDD 6 mois</span>
                        </div>
                        <p className="text-xs text-white/50 mb-4">Bujumbura, Burundi</p>
                        <p className="text-sm text-white/70 leading-relaxed mb-4">
                          Mission d'ingénierie IT au sein de l'une des plus grandes organisations humanitaires internationales au Burundi. 
                          Intervention dans un environnement multilingue et multiculturel, soumis aux standards rigoureux des Nations Unies.
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Conception et développement de solutions numériques conformes aux standards ONU</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Collaboration avec équipes internationales sur outils à impact humanitaire</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                            <span>Gestion et maintenance de systèmes d'information critiques</span>
                          </li>
                        </ul>
                        <a href="https://unicef.org/burundi" target="_blank" rel="noopener noreferrer" className="text-xs text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1">
                          unicef.org/burundi
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* HOGI */}
                    <div className="relative pl-8 pb-6 border-l-2 border-white/20">
                      <div className="absolute left-0 top-0 w-4 h-4 bg-white/60 rounded-full -translate-x-[9px] ring-4 ring-card-2"></div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-white">HOGI</h4>
                            <p className="text-sm text-tertiary font-medium">Ingénieur Backend</p>
                          </div>
                          <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-xs rounded-full font-medium">CDD</span>
                        </div>
                        <p className="text-xs text-white/50 mb-4">Bujumbura, Burundi</p>
                        <p className="text-sm text-white/70 leading-relaxed mb-4">
                          Conception et développement de modules backend pour les solutions numériques de la société HOGI.
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-tertiary flex-shrink-0 mt-0.5" />
                            <span>Développement de modules backend robustes et performants</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-tertiary flex-shrink-0 mt-0.5" />
                            <span>Amélioration des performances et stabilité des systèmes existants</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Spring Boot</span>
                          <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Node.js</span>
                          <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Django REST</span>
                        </div>
                        <a href="https://hogi.bi" target="_blank" rel="noopener noreferrer" className="text-xs text-tertiary hover:text-tertiary/80 transition-colors inline-flex items-center gap-1">
                          hogi.bi
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* AFRISURGE */}
                    <div className="relative pl-8 pb-6 border-l-2 border-white/20">
                      <div className="absolute left-0 top-0 w-4 h-4 bg-white/50 rounded-full -translate-x-[9px] ring-4 ring-card-2"></div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-white">AFRISURGE</h4>
                            <p className="text-sm text-primary font-medium">Ingénieur Logiciel (Remote)</p>
                          </div>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">CDD Remote</span>
                        </div>
                        <p className="text-xs text-white/50 mb-4">République Démocratique du Congo • Remote</p>
                        <p className="text-sm text-white/70 leading-relaxed mb-4">
                          Participation en mode full remote à un projet logiciel d'envergure régionale basé en RDC.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Développement de fonctionnalités backend complexes</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Coordination technique à distance avec équipe internationale</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Démonstration de capacité à livrer en environnement distribué</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Ufaranga */}
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 w-4 h-4 bg-white/40 rounded-full -translate-x-[9px] ring-4 ring-card-2"></div>
                      <div className="bg-gradient-to-br from-primary/10 to-white/5 border border-primary/20 rounded-xl p-6 hover:border-primary/30 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-white">Ufaranga</h4>
                            <p className="text-sm text-primary font-medium">Fondateur & Ingénieur Principal</p>
                          </div>
                          <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">Projet Privé</span>
                        </div>
                        <p className="text-xs text-white/50 mb-4">En pleine évolution • Développement actif</p>
                        <p className="text-sm text-white/70 leading-relaxed mb-4">
                          Système de paiement sans contact pour le transport urbain. Projet fintech innovant développé 
                          en dehors des heures de travail, visant à moderniser les transactions dans les transports en commun.
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Paiement sans contact pour transport urbain</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Architecture microservices complète multi-langages</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Services indépendants : Spring Boot (Java), Node.js, Django REST (Python)</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Gestion authentification, transactions, notifications, API Gateway</span>
                          </li>
                          <li className="flex items-start gap-2 text-xs text-white/60">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>Disponible pour démonstration technique intégrale</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg">Fintech</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg">Paiement NFC</span>
                          <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Microservices</span>
                          <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Java</span>
                          <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Python</span>
                          <span className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Node.js</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile & Achievements Column */}
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="bg-card-2 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-tertiary" />
                    Profil
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/50 mb-1">Nom complet</div>
                      <div className="text-sm text-white font-medium">Jean-Luc Kashindi Nestor</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-1">Âge</div>
                      <div className="text-sm text-white font-medium">25 ans</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-1">Localisation</div>
                      <div className="text-sm text-white font-medium">Gihosha, Bujumbura, Burundi</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-1">Email</div>
                      <div className="text-sm text-white font-medium break-all">Jeanluckashindi812@gmail.com</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-1">Téléphone</div>
                      <div className="text-sm text-white font-medium">+257 64 39 72 62</div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-card-2 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Points Forts
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-white">Architecture Microservices</div>
                        <div className="text-xs text-white/60">Expert en systèmes distribués</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-white">Projets Gouvernementaux</div>
                        <div className="text-xs text-white/60">Solutions à échelle nationale</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-white">Leadership Technique</div>
                        <div className="text-xs text-white/60">Mentorat et formation d'équipes</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-white">Innovation Continue</div>
                        <div className="text-xs text-white/60">Veille technologique active</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-card-2 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-secondary" />
                    Réseaux
                  </h3>
                  <div className="space-y-3">
                    <a href="https://github.com/jeanluckashindi-pro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group">
                      <Github className="w-5 h-5 text-white/60 group-hover:text-white" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">GitHub</div>
                        <div className="text-xs text-white/50">@jeanluckashindi-pro</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects - Redesigned */}
        <section className="py-24 bg-gradient-to-b from-transparent via-card-2/20 to-transparent">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm mb-4">
                <Rocket className="w-4 h-4" />
                En développement
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Projets en Cours</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Solutions innovantes que je développe actuellement pour transformer le paysage numérique
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* ODECA */}
              <div className="group bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Code className="w-7 h-7 text-primary" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      Gouvernemental
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">ODECA</h3>
                  <p className="text-sm text-primary/80 mb-4 font-medium">Système National de Gestion du Café</p>
                  
                  <p className="text-white/70 leading-relaxed mb-6 text-sm">
                    Plateforme complète de cartographie géospatiale et numérisation de la chaîne de valeur caféière au Burundi. 
                    Utilisée par les institutions gouvernementales pour le suivi et la gestion de la filière.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Cartographie géospatiale</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Gestion de la chaîne de valeur</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Échelle nationale</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Spring Boot</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Angular</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">React</span>
                  </div>
                </div>
              </div>

              {/* ISP Starlink */}
              <div className="group bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl overflow-hidden hover:border-secondary/30 transition-all hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                      Commercial
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">ISP Starlink</h3>
                  <p className="text-sm text-secondary/80 mb-4 font-medium">Intégration API Starlink</p>
                  
                  <p className="text-white/70 leading-relaxed mb-6 text-sm">
                    Tableau de bord temps réel pour le suivi des métriques réseau, performance et facturation clients. 
                    Intégration complète avec les API Starlink pour une gestion optimale.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Monitoring temps réel</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Gestion de facturation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Analytics avancés</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Spring Boot</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">React</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Node.js</span>
                  </div>
                </div>
              </div>

              {/* Ufaranga - Featured */}
              <div className="group bg-gradient-to-br from-primary/10 via-card-2 to-card-2 border border-primary/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-7 h-7 text-primary" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                      Projet Privé
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">Ufaranga</h3>
                  <p className="text-sm text-primary mb-4 font-medium">Paiement Sans Contact Transport Urbain</p>
                  
                  <p className="text-white/70 leading-relaxed mb-6 text-sm">
                    Système de paiement sans contact pour le transport urbain. Solution fintech innovante en pleine évolution, 
                    combinant Spring Boot (Java), Node.js et Django REST Framework (Python) dans une architecture microservices complète.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Paiement NFC pour transports en commun</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Architecture microservices multi-langages</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>API Gateway & système de transactions</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20">Fintech</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20">NFC</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Microservices</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Java</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Python</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evolution & Statistics Section - NEW */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-card-2/30 via-transparent to-card-2/30"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary/10 border border-tertiary/20 rounded-full text-tertiary text-sm mb-4">
                <TrendingUp className="w-4 h-4" />
                Évolution & Croissance
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Mon Parcours en Chiffres</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Une progression constante dans le développement de compétences et la réalisation de projets
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-primary/10 to-card-2 border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-xs text-white/60">Total</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-white mb-1">Projets Complétés</div>
                <div className="text-xs text-white/50">Depuis 2022</div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-card-2 border border-secondary/20 rounded-2xl p-6 hover:border-secondary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-secondary">12+</div>
                    <div className="text-xs text-white/60">Maîtrisées</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-white mb-1">Technologies</div>
                <div className="text-xs text-white/50">En constante évolution</div>
              </div>

              <div className="bg-gradient-to-br from-tertiary/10 to-card-2 border border-tertiary/20 rounded-2xl p-6 hover:border-tertiary/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-tertiary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-tertiary">100%</div>
                    <div className="text-xs text-white/60">Taux</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-white mb-1">Satisfaction Client</div>
                <div className="text-xs text-white/50">Projets livrés avec succès</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-card-2 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white/60" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">3+</div>
                    <div className="text-xs text-white/60">Années</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-white mb-1">Expérience Continue</div>
                <div className="text-xs text-white/50">Chez Mediabox Burundi</div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Experience Evolution Chart */}
              <div className="bg-card-2 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Évolution de l'Expérience</h3>
                    <p className="text-sm text-white/60">Croissance au fil des années</p>
                  </div>
                </div>
                <div className="h-[300px]">
                  <ExperienceChart />
                </div>
              </div>

              {/* Skills Donut Chart */}
              <div className="bg-card-2 border border-white/10 rounded-2xl p-8 hover:border-secondary/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Répartition des Compétences</h3>
                    <p className="text-sm text-white/60">Distribution par domaine d'expertise</p>
                  </div>
                </div>
                <div className="h-[300px]">
                  <SkillsDonutChart />
                </div>
              </div>

              {/* Tech Stack Proficiency & Projects Timeline */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:col-span-2">
                {/* Tech Stack */}
                <div className="bg-card-2 border border-white/10 rounded-2xl p-8 hover:border-tertiary/30 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-tertiary/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-tertiary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Maîtrise des Technologies</h3>
                      <p className="text-sm text-white/60">Niveau d'expertise par technologie</p>
                    </div>
                  </div>
                  <div className="h-[350px]">
                    <TechStackChart />
                  </div>
                </div>

                {/* Activity Chart */}
                <div className="bg-card-2 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Activité de Développement</h3>
                      <p className="text-sm text-white/60">Contributions mensuelles 2026</p>
                    </div>
                  </div>
                  <div className="h-[350px]">
                    <ProjectsTimelineChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications & Expertise - Expanded */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card-2/30 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary/10 border border-tertiary/20 rounded-full text-tertiary text-sm mb-4">
                <BookOpen className="w-4 h-4" />
                Partage de connaissances
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Publications & Articles</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Contributions techniques et analyses sur le développement logiciel et la transformation numérique
              </p>
            </div>
            
            {/* Featured Publication */}
            <div className="mb-12">
              <Link href="/publications" className="group block bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 sm:p-12">
                  <div className="lg:col-span-2">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4 font-medium">
                      Article Vedette
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      Architecture Microservices en Production : Retour d'Expérience
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6 text-base sm:text-lg">
                      Guide complet sur la conception, le déploiement et la maintenance de systèmes microservices à grande échelle. 
                      Couvre les patterns d'architecture, la gestion des données distribuées, l'observabilité, et les stratégies de déploiement.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Microservices</span>
                      <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Spring Boot</span>
                      <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Docker</span>
                      <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/50">
                      <span>15 Janvier 2026</span>
                      <span>•</span>
                      <span>12 min de lecture</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-48 lg:h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Code className="w-20 h-20 text-primary/40" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Publications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link href="/publications" className="group bg-card-2 border border-white/10 rounded-2xl p-6 hover:border-secondary/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  Digitalisation des Services Publics en Afrique
                </h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  Défis et opportunités du numérique gouvernemental dans le contexte africain avec études de cas.
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">10 Déc 2025</span>
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/publications" className="group bg-card-2 border border-white/10 rounded-2xl p-6 hover:border-tertiary/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-tertiary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-tertiary transition-colors">
                  Optimisation des Performances Backend
                </h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  Techniques avancées pour améliorer les temps de réponse et la scalabilité des APIs REST.
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">22 Nov 2025</span>
                  <ArrowRight className="w-4 h-4 text-tertiary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/publications" className="group bg-card-2 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  Sécurité des Applications Web Modernes
                </h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  Best practices pour sécuriser vos applications contre les vulnérabilités courantes.
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">05 Oct 2025</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/publications" className="group bg-card-2 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white/60" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
                  React Server Components : Guide Pratique
                </h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  Comprendre et implémenter les Server Components dans vos applications Next.js.
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">18 Sep 2025</span>
                  <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/publications" className="group bg-card-2 border border-white/10 rounded-2xl p-6 hover:border-secondary/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  CI/CD avec GitHub Actions
                </h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  Automatiser vos déploiements et tests avec des workflows GitHub Actions efficaces.
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">30 Août 2025</span>
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/publications" className="group bg-card-2 border border-white/10 rounded-2xl p-6 hover:border-tertiary/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-tertiary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-tertiary transition-colors">
                  Design Patterns en Java Spring
                </h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  Les patterns essentiels pour structurer vos applications Spring Boot professionnelles.
                </p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">12 Juil 2025</span>
                  <ArrowRight className="w-4 h-4 text-tertiary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card-2 text-white border border-white/10 rounded-lg hover:bg-white/5 transition-all group"
              >
                Voir toutes les publications
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section - NEW */}
        <section className="py-24 relative bg-gradient-to-b from-card-2/20 to-transparent">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-4">
                <Code className="w-4 h-4" />
                Services proposés
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Ce que je peux faire pour vous</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Des solutions complètes pour vos besoins en développement et architecture logicielle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Développement Fullstack</h3>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">
                  Création d'applications web complètes avec Spring Boot, React, Node.js et Angular. 
                  De la conception à la mise en production.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Applications web modernes</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>APIs REST & GraphQL</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Interfaces utilisateur réactives</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl p-8 hover:border-secondary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                  <Building className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Architecture Microservices</h3>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">
                  Conception et implémentation d'architectures distribuées scalables et résilientes 
                  pour des systèmes complexes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Design patterns avancés</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>API Gateway & Service Mesh</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Event-driven architecture</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl p-8 hover:border-tertiary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-tertiary/20 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-tertiary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">DevOps & Cloud</h3>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">
                  Automatisation des déploiements, CI/CD, containerisation et gestion d'infrastructure cloud.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    <span>Docker & Kubernetes</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    <span>CI/CD pipelines</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    <span>Monitoring & Logging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Conseil Technique</h3>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">
                  Accompagnement stratégique pour vos choix technologiques et l'optimisation de vos systèmes existants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Audit de code & architecture</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Choix technologiques</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Optimisation performance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl p-8 hover:border-secondary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intégrations API</h3>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">
                  Connexion de vos systèmes avec des services tiers, APIs externes et plateformes cloud.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>APIs RESTful & GraphQL</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Webhooks & Events</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Services tiers (Starlink, etc.)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl p-8 hover:border-tertiary/30 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-tertiary/20 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-tertiary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Formation & Mentorat</h3>
                <p className="text-white/70 leading-relaxed mb-4 text-sm">
                  Accompagnement d'équipes techniques et formation sur les technologies modernes et best practices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    <span>Formation équipes</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    <span>Code reviews</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle className="w-4 h-4 text-tertiary" />
                    <span>Best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
          <div className="max-w-4xl mx-auto px-8 text-center relative">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Discutons de votre projet
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Disponible pour des missions de développement fullstack, architecture de solutions et conseil technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-white/90 transition-all hover:scale-105"
              >
                Me contacter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-10 py-4 rounded-lg font-medium border border-white/10 hover:bg-white/5 transition-all"
              >
                Télécharger mon CV
              </Link>
            </div>
          </div>
        </section>

        {/* Footer - Enhanced */}
        <footer className="border-t border-white/5 py-16 bg-card-2/30">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <h3 className="text-white font-bold text-2xl mb-4">Jean-Luc Kashindi Nestor</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Ingénieur Fullstack Senior passionné par la création de solutions numériques 
                  à fort impact pour l'Afrique. 3 ans d'expérience chez Mediabox Burundi.
                </p>
                <a href="https://github.com/jeanluckashindi-pro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Github className="w-5 h-5 text-white/60" />
                  <span className="text-white/60 text-sm">GitHub</span>
                </a>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Navigation</h3>
                <div className="space-y-3 text-sm">
                  <Link href="/projets/professionnels" className="block text-white/60 hover:text-white transition-colors">Projets</Link>
                  <Link href="/competences" className="block text-white/60 hover:text-white transition-colors">Compétences</Link>
                  <Link href="/publications" className="block text-white/60 hover:text-white transition-colors">Publications</Link>
                  <Link href="/cv" className="block text-white/60 hover:text-white transition-colors">CV</Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <div className="space-y-3 text-sm">
                  <a href="tel:+25764397262" className="block text-white/60 hover:text-white transition-colors">
                    +257 64 39 72 62
                  </a>
                  <a href="mailto:Jeanluckashindi812@gmail.com" className="block text-white/60 hover:text-white transition-colors break-all">
                    Jeanluckashindi812@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-center text-sm text-white/40">
                © 2026 Jean-Luc Kashindi Nestor. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
