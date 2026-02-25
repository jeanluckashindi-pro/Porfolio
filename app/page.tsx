import Header from "./components/Header";
import { Briefcase, Code, FileText, Rocket, ExternalLink, Github, ArrowRight, CheckCircle, Users, Building, Award, BookOpen, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section - Flex Layout */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,180,248,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(129,201,149,0.06),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-32 relative">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Left Column - Main Info */}
              <div className="flex-1 w-full">
                
                <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary mb-6 font-semibold">
                  Ingénieur Fullstack Senior
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
                  Architecte de solutions numériques à fort impact. Spécialisé dans la conception et le déploiement 
                  de systèmes utilisés à l'échelle nationale par des institutions gouvernementales et organisations internationales.
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    <span>Mediabox Burundi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-secondary" />
                    <span>Bujumbura, Burundi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-tertiary" />
                    <span>25 ans</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all hover:scale-105">
                    Démarrer un projet
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/projets/professionnels" className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-8 py-4 rounded-lg font-medium border border-white/10 hover:bg-white/5 transition-all">
                    Voir mes réalisations
                  </Link>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="w-full lg:w-auto lg:min-w-[500px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-xl p-5 hover:scale-105 transition-transform text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">3+</div>
                    <div className="text-xs text-white/70 leading-tight">Ans d'expérience</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 rounded-xl p-5 hover:scale-105 transition-transform text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-secondary mb-1">10+</div>
                    <div className="text-xs text-white/70 leading-tight">Projets livrés</div>
                  </div>
                  <div className="bg-gradient-to-br from-tertiary/20 to-tertiary/5 border border-tertiary/20 rounded-xl p-5 hover:scale-105 transition-transform text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-tertiary mb-1">5+</div>
                    <div className="text-xs text-white/70 leading-tight">Technologies</div>
                  </div>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-5 hover:scale-105 transition-transform text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-white/70 leading-tight">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Position - Enhanced */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-card-2/50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Actuellement</h2>
                <p className="text-white/60 text-sm">Mon poste actuel</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-2xl p-8 sm:p-12 hover:border-primary/30 transition-all">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs mb-4">
                    <Building className="w-3 h-3" />
                    Entreprise Leader
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Ingénieur Fullstack Senior</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl font-semibold text-primary">Mediabox Burundi</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60">2022 - Présent</span>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-8 text-lg">
                    Mediabox Burundi est le <span className="text-white font-medium">revendeur légal officiel Starlink</span> au Burundi. 
                    En charge de la conception, du développement et du déploiement de solutions numériques stratégiques 
                    pour des clients publics et privés.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20">Spring Boot</span>
                    <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm rounded-lg border border-secondary/20">React</span>
                    <span className="px-4 py-2 bg-tertiary/10 text-tertiary text-sm rounded-lg border border-tertiary/20">Node.js</span>
                    <span className="px-4 py-2 bg-white/5 text-white/60 text-sm rounded-lg border border-white/10">Microservices</span>
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
        </section>

        {/* Projects - Enhanced Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Projets en Développement</h2>
                <p className="text-white/60 text-sm">Solutions innovantes en cours</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* ODECA */}
              <div className="group bg-card-2 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                  Gouvernemental
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">ODECA</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Système national de gestion de la filière café. Cartographie géospatiale et numérisation complète 
                  de la chaîne de valeur caféière au Burundi.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Spring Boot</span>
                  <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Angular</span>
                  <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">React</span>
                </div>
              </div>

              {/* ISP Starlink */}
              <div className="group bg-card-2 border border-white/10 rounded-2xl p-8 hover:border-secondary/30 transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-secondary" />
                </div>
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full mb-4">
                  Commercial
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">ISP Starlink</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Intégration complète des API Starlink. Tableau de bord temps réel pour le suivi des métriques, 
                  performance réseau et facturation clients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Spring Boot</span>
                  <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">React</span>
                  <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Node.js</span>
                </div>
              </div>

              {/* Ufarnaga - Featured */}
              <div className="group bg-gradient-to-br from-primary/10 via-card-2 to-card-2 border border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/40 to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code className="w-7 h-7 text-primary" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full mb-4 font-medium">
                    Projet Personnel
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Ufarnaga</h3>
                  <p className="text-sm text-primary mb-3 font-medium">Solution Fintech Innovante</p>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Architecture microservices complète. Spring Boot (Java), Node.js et Django REST Framework (Python). 
                    Authentification, transactions, notifications et API Gateway.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20">Microservices</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Java</span>
                    <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-lg">Python</span>
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
